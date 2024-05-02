import "./App.css";
import SideNav from "./Components/SideNav/SideNav";
import Main from "./Components/Main/Main";
function App() {
  return (
    <div className="flex">
      <SideNav />
      <Main />
    </div>
  );
}

export default App;
