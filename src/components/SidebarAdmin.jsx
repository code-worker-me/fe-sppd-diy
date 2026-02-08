import React from "react";
import { Button } from "./ui/button";
import { Link, Outlet, useLocation } from "react-router";

export default function SidebarAdmin() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <div class="relative flex min-h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border px-4 pb-10 text-gray-700 shadow-xl shadow-blue-gray-900/5">
        <div class="p-4 mb-2">
          <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            <Link to="/">SPPD DIY</Link>
          </h5>
        </div>

        <nav class="flex min-w-60 flex-col gap-6 p-2 font-sans text-base font-normal text-blue-gray-700 mb-auto">
          <Button
            variant={isActive("/users") ? "secondary" : "outline"}
            disabled={isActive("/users")}
            asChild
          >
            <Link to="/users">Users</Link>
          </Button>
          <Button
            variant={isActive("/sppd") ? "secondary" : "outline"}
            disabled={isActive("/sppd")}
            asChild
          >
            <Link to="/sppd">SPPD</Link>
          </Button>
          <Button
            variant={isActive("/perjalanan") ? "secondary" : "outline"}
            disabled={isActive("/perjalanan")}
            asChild
          >
            <Link to="/perjalanan">Perjalanan</Link>
          </Button>
        </nav>

        <Button variant="destructive" asChild>
          <Link to="/logout">Logout</Link>
        </Button>
      </div>

      <Outlet />
    </div>
  );
}
