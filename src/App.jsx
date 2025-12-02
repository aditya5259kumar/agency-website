import React,{useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="dark:bg-white relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
