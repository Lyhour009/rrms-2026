import { Navigate, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import StateContext from "../context/ContextProvider";
const navItems = [
  { label: "Dashboard", icon: "D", active: true },
  { label: "Browse Rooms", icon: "R" },
  { label: "My Bookings", icon: "B" },
  { label: "History", icon: "H" },
  { label: "Notifications", icon: "N" },
  { label: "Profile", icon: "P" },
];

function SidebarContent({ isCollapsed = false, onNavigate }) {
  return (
    <>
      <div className="flex h-16 items-center border-b border-slate-200 px-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-base font-bold text-white">
            R
          </span>
          {!isCollapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-slate-950">RRMS</p>
              <p className="truncate text-xs text-slate-500">User portal</p>
            </div>
          )}
        </div>
      </div>

      <nav className="space-y-1 p-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={onNavigate}
            className={`flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm font-semibold transition ${
              item.active
                ? "bg-emerald-50 text-emerald-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
            } ${isCollapsed ? "justify-center" : ""}`}
            title={isCollapsed ? item.label : undefined}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                item.active
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {item.icon}
            </span>
            {!isCollapsed && <span className="truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-3">
        <div
          className={`rounded-lg bg-slate-50 p-3 ${
            isCollapsed ? "text-center" : ""
          }`}
        >
          <p className="text-xs font-semibold text-slate-500">
            {!isCollapsed ? "Next booking" : "Next"}
          </p>
          {!isCollapsed && (
            <p className="mt-1 text-sm font-bold text-emerald-700">
              Today, 2:30 PM
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default function DefaultLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const { token } = useContext(StateContext);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      {isMobileSidebarOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-slate-950/45 lg:hidden"
          aria-label="Close sidebar"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMobileSidebarOpen(false)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
          aria-label="Close sidebar"
        >
          x
        </button>
        <SidebarContent onNavigate={() => setIsMobileSidebarOpen(false)} />
      </aside>

      <aside
        className={`fixed inset-y-0 left-0 z-30 hidden border-r border-slate-200 bg-white transition-all duration-300 lg:block ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <SidebarContent isCollapsed={isCollapsed} />
      </aside>

      <div
        className={`min-h-screen transition-all duration-300 ${
          isCollapsed ? "lg:pl-20" : "lg:pl-64"
        }`}
      >
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg font-bold text-slate-700 transition hover:bg-slate-50 lg:hidden"
                aria-label="Open sidebar"
              >
                =
              </button>
              <button
                type="button"
                onClick={() => setIsCollapsed((value) => !value)}
                className="hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-lg font-bold text-slate-700 transition hover:bg-slate-50 lg:flex"
                aria-label="Toggle sidebar"
              >
                {isCollapsed ? ">" : "<"}
              </button>
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  User dashboard
                </p>
                <h1 className="text-lg font-bold text-slate-950">
                  My Reservations
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden h-10 w-64 items-center rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 md:flex">
                Search available rooms
              </div>
              <button className="h-10 rounded-lg bg-emerald-600 px-4 text-sm font-bold text-white transition hover:bg-emerald-700">
                Book room
              </button>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                U
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
