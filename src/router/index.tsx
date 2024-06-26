import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "@/layout";

import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Page404 from "@/pages/404";

// 项目一路由组件
const P1Live = lazy(() => import("../pages/P1/live"));
const P1Data = lazy(() => import("../pages/P1/data"));

// 项目二路由组件
const P2Live = lazy(() => import("../pages/P2/live"));
const P2Data = lazy(() => import("../pages/P2/data"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
        index: true,
      },
      //项目一
      {
        path: "/1/live",
        element: <P1Live></P1Live>,
      },
      {
        path: "/1/data",
        element: <P1Data></P1Data>,
      },
      //项目二
      {
        path: "/2/live",
        element: <P2Live></P2Live>,
      },
      {
        path: "/2/data",
        element: <P2Data></P2Data>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);
