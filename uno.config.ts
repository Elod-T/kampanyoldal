import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
} from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  shortcuts: {
    "custom-container":
      "mx-auto w-screen w-350px xs:w-400px sm:w-620px md:w-760px mg:w-800px lg:w-900px xl:w-1100px 2xl:w-1280px",
    btn: "py-2 px-5 md:px-10 rounded-full font-bold border-0 hover:bg-opacity-80 active:bg-opacity-100 cursor-pointer disabled:bg-gray disabled:cursor-not-allowed no-underline",
    "btn-red": "bg-brand-red text-white font-pirata tracking-wide",
  },

  theme: {
    colors: {
      "neutral-gray": "#232323",
      "dark-gray": "#202020",
      "brand-red": "#B21917",
    },
  },

  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        pirata: "Pirata One",
        inter: "Inter",
      },
    }),
    presetScrollbar({
      scrollbarThumbColor: "#000000",
      scrollbarTrackColor: "#333333",
    }),
  ],

  transformers: [transformerVariantGroup()],
});
