import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import neutral from "@park-ui/panda-preset/colors/neutral";

export default defineConfig({
  preflight: true,
  presets: [
    createPreset({ accentColor: neutral, grayColor: neutral, radius: "lg" }),
  ],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  theme: {
    extend: {},
  },
  outdir: "styled-system",
});
