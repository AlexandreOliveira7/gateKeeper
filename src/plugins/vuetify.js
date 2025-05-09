import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { pt } from "vuetify/locale"; // ✅ Adicionado aqui

export default createVuetify({
  locale: {
    locale: "pt",
    messages: { pt },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          brown_dg: "#6a3d31",
          beige_dg: "#FFF3F0",
          orange_dg: "#fd683e",
          gray100_dg: "#fbfbfb",
          gray400_dg: "#bfbfbf",
          gray500_dg: "#A2A2A2",
          lightGreen_dg: "#90ee90",
          green_dg: "#008000",
          red_dg: "#f44336",
          pink_dg: "#f1388b",
          yellow_dg: "#FFcc00",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
