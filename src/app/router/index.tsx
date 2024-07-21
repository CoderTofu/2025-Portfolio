/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { RouteObject } from "react-router";
import RouterRoot from "./RouterRoot";

const HomePage = lazy(() => import("../../pages/home"));

const Router: RouteObject[] = [
  {
    path: "/",
    element: <RouterRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default Router;
