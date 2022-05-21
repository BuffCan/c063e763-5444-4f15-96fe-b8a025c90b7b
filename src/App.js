import { createTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import Navbar from "./components/navbar";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <p>Test</p>
    </ThemeProvider>
  );
}

export default App;
