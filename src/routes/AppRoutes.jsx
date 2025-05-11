import { Outlet } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";

const AppRoutes = [
  {
    name: "main",
    path: "/",
    Component: () => <main> <Outlet /> </main>,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: () => <Home />,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: () => <About />,
      },
    ],
  },
  {
    name: "404",
    path: "*",
    Component: () => <p>this content 404 page</p>,
    key: "404",
  },
];
export default AppRoutes;