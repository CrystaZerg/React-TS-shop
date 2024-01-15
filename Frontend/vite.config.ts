import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      functions: "src/functions",
      hooks: "srs/hooks",
      store: "src/store",
      tests: "src/tests",
      types: "src/types",
    },
  },
});
