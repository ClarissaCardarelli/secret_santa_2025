import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Scoreboard from "./pages/Scoreboard/Scoreboard";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/scores",
        element: <Scoreboard />,
      },
    ],
  },
]);

export default router;
