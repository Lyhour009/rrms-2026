import { createBrowserRouter } from "react-router-dom";

import GuestLayout from "./layouts/GuestLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import AdminLayout from "./layouts/AdminLayout";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Index from "./pages/public/Index";

import AdminIndex from "./pages/admin/Index";
import UserIndex from "./pages/user/Index";

const router = createBrowserRouter([
  // PUBLIC WEBSITE
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // USER DASHBOARD
  {
    path: "/dashboard",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <UserIndex />,
      },
    ],
  },

  // ADMIN DASHBOARD
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminIndex />,
      },
    ],
  },
]);

export default router;
