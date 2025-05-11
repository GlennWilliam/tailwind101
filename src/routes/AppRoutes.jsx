import { Outlet } from "react-router-dom";

const AppRoutes = [
  {
    name: "main",
    path: "/",
    Component: () => 
        (
            <main>
                <Outlet />
            </main>
        ),
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: () => <p>home</p>,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: () => <p>this content about page</p>,
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