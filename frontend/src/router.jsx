import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Index from "./pages/public/Index";
import AdminIndex from "./pages/admin/Index";
import UserIndex from "./pages/user/Index";
import ProtectedRoute from "./pages/auth/ProtectRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute user={null}>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <UserIndex />,
      },
    ],
  },

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
