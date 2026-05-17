import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import StateContext from "../context/ContextProvider";

export default function GuestLayout() {
  const { token } = useContext(StateContext);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div>
      <header>Navbar</header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
  );
}
