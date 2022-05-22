import { createTheme, ThemeProvider, Toolbar } from "@material-ui/core";
import React from "react";
import Card from "./components/cardDataRender";
import Navbar from "./components/navbar";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Toolbar />
      <Card />
    </ThemeProvider>
  );
}

export default App;
