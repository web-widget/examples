import path from "path";
import { defineConfig } from "vite";
import { createRequire } from "module";
import reactPlugin from "@vitejs/plugin-react";

const require = createRequire(import.meta.url);
const cwd = process.cwd();
const { source, main, module, system } = require(`${cwd}/package.json`);

const outDir = "dist/";
const formatMap = {
  cjs: main,
  esm: module,
  system,
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    build: {
      outDir,
      lib: {
        entry: path.resolve(cwd, source),
        formats: Object.keys(formatMap),
        fileName: (format) => {
          const normalize = formatMap[format].replace(/\.\//, "");
          return normalize.startsWith(outDir)
            ? normalize.replace(outDir, "")
            : normalize;
        },
      },
      cssCodeSplit: true,
      rollupOptions: {
        // external: ["react", "react-dom"],
      },
    },
    plugins: [
      reactPlugin(),
    ],
  };

  return config;
});
