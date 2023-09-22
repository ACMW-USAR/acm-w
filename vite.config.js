import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      // Add an alias for the @heroicons/react package
      {
        find: /^@heroicons\/react\/(.*)$/,
        replacement: "@heroicons/react/$1",
      },
    ],
  },
});
