import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../commons/molecules/NavBar";

const MainLayout = () => {
  return (
    <main className="relative mx-auto box-border flex min-h-screen w-full max-w-[1444px] flex-col gap-4 overflow-x-hidden p-4">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;