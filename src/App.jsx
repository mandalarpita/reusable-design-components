import React from "react";
import ReactDOM from "react-dom/client";
import TestComponents from "./Test/TestComponents";
import { StylesProvider } from "@mui/styles";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./theme";

function App() {
  return (
    <div className="App" style={{ height: "calc(96vh)", margin: "0", overflow: "auto", padding: "1rem" }}>
      {/* <StylesProvider>
        <ThemeProvider theme={customTheme}> */}

      <TestComponents />

      {/* </ThemeProvider> */}
      {/* </StylesProvider> */}
    </div>
  );
}
export default App;
