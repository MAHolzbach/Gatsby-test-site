import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  googleFonts: [
    {
      name: "Roboto",
      styles: ["300, 400, 500, 700"]
    }
  ],
  headerFontFamily: ["Roboto"],
  bodyFontFamily: ["Roboto"]
});

export default typography;
