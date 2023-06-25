import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout() {
  return (
    <div>
      <Header link="/" title="Podcaster" />
      <div className="bg-gray-100 min-h-screen px-4">
        <Outlet />
      </div>
    </div>
  );
}
