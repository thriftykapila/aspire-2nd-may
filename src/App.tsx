import React from "react";
import "./App.css";
import SideNav from "src/Components/SideNav/SideNav";
import Main from "src/Components/Main/Main";
function App() {
  return (
    <div className="flex">
      <SideNav />
      <Main />
    </div>
  );
}

export default App;
