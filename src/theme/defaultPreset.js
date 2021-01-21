export default {
  palette: {
    primary: "#90caf9",
    secondary: "#f48fb1",
    error: "#f44336",
    warning: "#ff9800",
    info: "#2196f3",
    success: "#4caf50",
  },
  scales: {
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  },
  breakpoints: [0, 600, 960, 1280, 1920],

  typography: {
    root: {
      margin: 0,
    },
    h1: {
      fontSize: "40px",
    },
    h2: {
      fontSize: "36px",
    },
    h3: {
      fontSize: "32px",
    },
    h4: {
      fontSize: "28px",
    },
    h5: {
      fontSize: "24px",
    },
    h6: {
      fontSize: "20px",
    },
    paragraph: {},
    strong: {},
    underline: {},
    delete: {},
    code: {},
    keyboard: {},
    mark: {},
  },
  link: {
    textDecoration: "none",
  },
  buttons: {
    root: {
      border: "none",
      backgroundColor: "#2196f3",
      padding: "10px",
      borderRadius: "4px",
      color: "white",
      ":hover": {
        filter: "brightness(120%)",
      },
    },
    variants: {
      fab: {
        borderRadius: "50%",
        border: "none",
      },
    },
  },
};
