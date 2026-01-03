import "./css/reset.css";
import "./css/variables.css";
import "./css/global.css";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default App;
