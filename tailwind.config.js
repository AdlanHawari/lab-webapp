module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#3BB79F",
        "lighten10": "#DDF2ED",
        "lighten20": "#F2FAF8",
        "darken10":"#1DA68B",
        "darken15":"#189A81",
        "darken20":"#205F52",
        "button":"#3DB49C"
      },
      secondary: {
        DEFAULT: "#648FAD",
        "darker10": "#51738B",
        "darker20": "#3B5365",
        "50s": "#F5FBFD",
        "100": "#EAF2F4",
        "200": "#D3E7EC"
      },
      success: {
        DEFAULT: "#56C389",
        "darker20": "#3A8B60"
      },
      warning: {
        DEFAULT: "#E98F3D",
        "dark": "#8A603A",
        "light": "#FFEFE1"
      },
      error: {
        DEFAULT: "#E9523D",
        "dark": "#7E3F36",
        "light": "#F8E5E2"
      },
      grey:{
        "50": "#F9FAF9",
        "100": "#EBF0F0",
        "200": "#CCD4D4",
        "300": "#C4CCCC",
        "400": "#A9B5B5",
        "500": "#88928F",
        "700": "#5F6564",
      },
      black:{
        "100": "#95A9A9",
        "200": "#758888",
        "300": "#5C6F6F",
        "400": "#475757",
        "500": "#243E3E",
        "900": "#2A2D2C",
      },
      sidebar:{
        DEFAULT:"#EAF2F4",
        menu: "#D3E7EC",
        submenu: "#D8E5E9"
      },
      white: "#FFF",
      cardStrokes: "#CED4D4"
    },
    fontFamily: {
      'sans': ['Inter', "ui-sans-serif", "system-ui"]
    },
    fontSize: {
      xxxs: '9px',
      xxs: '10px',
      xs: '12px', 
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '7xl': '72px'
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
