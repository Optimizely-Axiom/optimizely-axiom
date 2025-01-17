import { transformDemos } from "./transformDemos.mjs";
import { transformDesignTokens } from "./transformDesignTokens.mjs";

export function remarkPlugin() {
  return (tree, file) => {
    transformDesignTokens(tree, file);
    transformDemos(tree, file);
  };
}
