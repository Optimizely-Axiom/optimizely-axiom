import hash from "@emotion/hash";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import {
  getSourceFromVirtualCssFile,
  virtualCssFileFilter,
} from "@vanilla-extract/integration";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import { readFileSync } from "node:fs";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const env = process.env.NODE_ENV ?? "development";
const pkg = JSON.parse(readFileSync("./package.json"));
const external = new RegExp(
  "^(?:" +
    Object.keys({
      ...pkg.dependencies,
      ...pkg.peerDependencies,
    }).join("|") +
    ")(?:/.+)?$",
);

export default defineConfig([
  {
    external,
    input: {
      index: "src/index.ts",
      unstable: "src/unstable.ts",
    },
    onwarn(warning, warn) {
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
      },
      {
        dir: "dist/esm",
        entryFileNames: (info) => {
          return info.name.endsWith(".css")
            ? `${info.name.replace(/\.css$/, "-css")}.js`
            : "[name].js";
        },
        format: "es",
        manualChunks:
          env === "production"
            ? undefined
            : (id, { getModuleInfo }) => {
                if (
                  id.includes("/axiom-provider/") ||
                  id.includes("/box/") ||
                  id.includes("/button/") ||
                  id.includes("/icon/")
                ) {
                  return "base";
                } else if (id.includes("recipe")) {
                  return "vanilla";
                } else if (getModuleInfo(id).meta.preserveDirectives) {
                  return "client";
                }
                return "server";
              },
        preserveModules: env === "production",
      },
    ],
    plugins: [
      {
        name: "preserve-directives",
        renderChunk(code, chunk) {
          const directives = chunk.moduleIds.some(
            (id) => this.getModuleInfo(id).meta.preserveDirectives,
          );
          return directives ? '"use client";\n' + code : code;
        },
        transform(code, id) {
          if (
            code.startsWith('"use client";') ||
            id.endsWith(".tsx") ||
            id.includes("node_modules/@mantine/hooks")
          ) {
            return { code, meta: { preserveDirectives: "client" } };
          }

          return null;
        },
      },
      {
        name: "sprinkles-merge",
        transform(code, id) {
          if (!id.endsWith("src/sprinkles/sprinkles.ts")) {
            return null;
          }

          const search = `import { createMapValueFn, createSprinkles } from "@vanilla-extract/sprinkles";`;
          const replace = [
            `import { createMapValueFn } from "@vanilla-extract/sprinkles/createUtils";`,
            `import { createSprinkles } from "@vanilla-extract/sprinkles/createRuntimeSprinkles";`,
          ].join("\n");
          if (!code.includes(search)) {
            throw new Error("Could not find sprinkles imports to rewrite");
          }
          return code.replace(search, replace);
        },
      },
      nodeResolve({
        preferBuiltins: false,
      }),
      esbuild({
        define: {
          "process.env.NODE_ENV": JSON.stringify(env),
        },
        target: "esnext",
      }),
      json(),
      env !== "production" && {
        async load(id) {
          if (!virtualCssFileFilter.test(id)) {
            return null;
          }
          const { fileName, source } = await getSourceFromVirtualCssFile(id);
          return `
            if (typeof document !== "undefined") {
              const style = document.head.appendChild(
                document.createElement("style"),
              );
              style.dataset.fileName = ${JSON.stringify(fileName)};
              style.appendChild(
                document.createTextNode(${JSON.stringify(source)}),
              );
            }
          `;
        },
        name: "vanilla-extract-inject",
        async resolveId(id) {
          if (!virtualCssFileFilter.test(id)) {
            return null;
          }
          return id;
        },
      },
      vanillaExtractPlugin(
        env === "production"
          ? {
              identifiers: (options) =>
                normalizeIdentifier(hash(`${pkg.version}_${options.hash}`)),
            }
          : {},
      ),
    ],
  },
  {
    external,
    input: {
      index: "src/index.ts",
      unstable: "src/unstable.ts",
    },
    output: {
      dir: "dist",
      format: "es",
    },
    plugins: [
      dts({
        respectExternal: true,
        tsconfig: "tsconfig.build.json",
      }),
    ],
  },
]);

function normalizeIdentifier(identifier) {
  return identifier.match(/^[0-9]/) ? "_".concat(identifier) : identifier;
}
