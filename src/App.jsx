import React,{useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [theme, settheme] = useState("light");

  return (
    <div className="dark:bg-white relative">
      <Navbar theme={theme} settheme={settheme} />
    </div>
  );
}

export default App;
