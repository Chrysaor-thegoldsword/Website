import App from "./App.jsx";
import "./index.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import TeamPage from "./pages/TeamPages/index.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "team",
    element: <TeamPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
