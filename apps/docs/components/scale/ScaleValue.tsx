import { theme } from "@optiaxiom/globals";
import { Box, Flex, Text } from "@optiaxiom/react";
import cssesc from "cssesc";
import { useTheme } from "nextra-theme-docs";
import { useEffect, useState } from "react";

import { Td } from "../table";

const px = (rem: string) =>
  rem.endsWith("rem")
    ? `${parseFloat((parseFloat(rem.slice(0, -3)) * 16).toFixed(0))}px`
    : rem;

export const ScaleValue = ({
  hidePixels,
  hidePreview,
  type,
  value,
}: {
  hidePixels?: boolean;
  hidePreview?: boolean;
  type: "selector" | "value";
  value: Record<string, string> | string;
}) => {
  const { resolvedTheme = "light" } = useTheme();
  const [renderedTheme, setRenderedTheme] = useState("");
  useEffect(() => setRenderedTheme(resolvedTheme), [resolvedTheme]);

  const [size, setSize] = useState(type === "value" ? value : undefined);
  useEffect(() => {
    if (type === "selector" && typeof value === "string") {
      setSize(getStyleValues(value));
    }
  }, [renderedTheme, type, value]);

  return (
    size !== undefined && (
      <>
        <Td
          display={
            typeof size === "string" && isColorType(size)
              ? ["none", "table-cell"]
              : undefined
          }
          valign={
            typeof size === "string" && isColorType(size) ? "middle" : undefined
          }
          whiteSpace="nowrap"
        >
          <Flex gap="8">
            {(typeof size === "object"
              ? Object.entries(size).map(([key, value]) => `${key}: ${value}`)
              : [size]
            ).map((value) => (
              <Text
                fontFamily="mono"
                fontSize="sm"
                fontWeight="500"
                key={value}
                style={{ color: "var(--shiki-token-function)" }}
              >
                {value}
              </Text>
            ))}
          </Flex>
        </Td>
        {!hidePixels && (
          <Td whiteSpace="nowrap">
            <Flex gap="8">
              {(typeof size === "object"
                ? Object.entries<string>(size).map(
                    ([key, value]) => `${key}: ${px(value)}`,
                  )
                : [px(size)]
              ).map((value) => (
                <Text
                  fontFamily="mono"
                  fontSize="sm"
                  fontWeight="500"
                  key={value}
                  style={{ color: "var(--shiki-token-function)" }}
                >
                  {value}
                </Text>
              ))}
            </Flex>
          </Td>
        )}
        {!hidePreview && typeof size !== "object" && (
          <Td display={isColorType(size) ? undefined : ["none", "table-cell"]}>
            {isColorType(size) ? (
              <Box
                rounded="sm"
                style={{
                  aspectRatio: 100 / 60,
                  backgroundImage: [
                    `linear-gradient(${size}, ${size})`,
                    `repeating-conic-gradient(color-mix(in srgb, ${theme.colors["bg.default.inverse"]} 5%, transparent) 0% 25%, transparent 0% 50%)`,
                  ].join(", "),
                  backgroundSize: "16px 16px",
                  boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${theme.colors["bg.default.inverse"]} 20%, transparent)`,
                }}
                w="56"
              />
            ) : (
              <Box bg="bg.information" h="2xs" style={{ width: size }} />
            )}
          </Td>
        )}
      </>
    )
  );
};

function getCssRuleText(
  node: CSSRule | CSSStyleSheet | Document,
  selector: string,
): false | string {
  if (node instanceof Document) {
    for (const sheet of node.styleSheets) {
      const result = getCssRuleText(sheet, selector);
      if (result) {
        return result;
      }
    }
  } else if (node instanceof CSSGroupingRule || node instanceof CSSStyleSheet) {
    for (const cssRule of node.cssRules) {
      const result = getCssRuleText(cssRule, selector);
      if (result) {
        return result;
      }
    }
  } else if (node instanceof CSSStyleRule && node.selectorText == selector) {
    return node.style.cssText;
  }

  return false;
}

const getStyleValues = (selector: string) => {
  const style = getCssRuleText(
    document,
    `.${cssesc(selector, { isIdentifier: true })}`,
  );
  if (!style) {
    throw new Error("Could not parse style for selector");
  }

  const styles = style
    .split(";")
    .filter((line) => line)
    .map((line) => {
      const [key, ...rest] = line.split(": ");
      const value = rest.join(": ");
      if (value.startsWith("var(")) {
        const computedValue = window
          .getComputedStyle(document.body)
          .getPropertyValue(value.slice("var(".length, -")".length));
        return [key, computedValue];
      }
      return [key, value];
    });
  return styles.length === 1 ? styles[0][1] : Object.fromEntries(styles);
};

const isColorType = (value: string) => value.startsWith("#");
