import React from "react";
import "./App.css";
// import Application from './components/application/Application';
// import Skills from './components/skills/Skills';
// import Counter from './components/counter/Counter';
import { AppProviders } from "./components/providers/app-providers";
import MuiMode from "./components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={["nirav", "swaim"]} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
