import React from "react";
import Main from "./pages/main";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";


// custom theme for the application
const theme = createTheme({
  palette: {
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand'
  }
})
// --- //


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
