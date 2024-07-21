import { createTheme } from "@mui/material/styles";
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#EC6F16",
      secondary: "#005C46",
    },
  },
  typography: {
    fontFamily: "Nunito",
    h1: {
      fontSize: 34,
      fontWeight: "600",
      letterSpacing: "-0.06px"
    },
    body1: {
      fontSize: 16,
      fontWeight: "400",
      letterSpacing: "0.15px"
    },
    body2: {
      padding: "2px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          maxHeight: "40px",
          fontWeight: 900,
          borderRadius: "8px",
        }
      },
      defaultProps: {
        disableElevation: true,
        variant: "contained",
        size: "medium"
      }
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          width: "240px",
        }
      },
      defaultProps: {
        size: "small",
        MenuProps: {
          PaperProps: { sx: { maxHeight: 224 } }
        }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        size: "small"
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          textAlign: "center",
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: "center",
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "15px"
        },
        ".MuiPaper-root": {
          borderRadius: "15px"
        }
      },
      defaultProps: {
        fullWidth: true
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          display: "flex",
          fontFamily: "Nunito",
          color: "#EC6F16",
          mb: "10px",
          alignItems: "center",
          justifyContent: "center"
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        size: "small"
      },
      variants: [
        {
          props: { variant: "close" },
          style: {
            position: "absolute",
            right: 0,
            marginRight: "10px"
          }
        }
      ]
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: "20px",
          "@media (max-width: 1310px)": {
            marginBottom: "20px"
          },
        }
      },
      defaultProps: {
        variant: "outlined",
        size: "small"
      }
    },
  }
});
export default lightTheme;