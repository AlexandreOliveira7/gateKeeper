import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
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
          white: "#ffffff",
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
