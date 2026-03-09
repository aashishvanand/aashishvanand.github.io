import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [vinext(), cloudflare()],
  // In dev mode (serve), vinext runs its own SSR server outside workerd,
  // so we need to externalize CJS packages for Node.js compatibility.
  // In build mode, the Cloudflare plugin bundles everything for Workers.
  ...(command === "serve"
    ? {
        ssr: {
          external: [
            "react",
            "react-dom",
            "react-dom/server",
            "prop-types",
            "react-is",
            "hoist-non-react-statics",
            "@babel/runtime",
            "@babel/runtime/helpers/extends",
            "@babel/runtime/helpers/objectWithoutPropertiesLoose",
            "@babel/runtime/helpers/interopRequireDefault",
            "@babel/runtime/helpers/interopRequireWildcard",
            "@babel/runtime/helpers/typeof",
            "@babel/runtime/helpers/inheritsLoose",
            "@babel/runtime/helpers/taggedTemplateLiteralLoose",
          ],
          noExternal: true,
        },
      }
    : {}),
}));
