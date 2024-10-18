import { Database, HomeIcon } from "lucide-react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";

const sidebarItems = [
  {
    href: "/dashboard/main",
    icon: <HomeIcon />,
    title: "Home",
    subTitle: "This is main",
  },
  {
    href: "/dashboard/counter",
    icon: <Database />,
    title: "Dashboard",
    subTitle: "Manager",
  },
];

export default function Sidebar() {
  return (
    <>
      <div
        id="menu"
        className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64   h-screen "
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-white">
            Dash<span className="text-blue-500">Board</span>
          </h1>
          <p className="text-slate-500 text-sm">
            Manage your actions and activities
          </p>
        </div>
        <div id="profile" className="px-6 pt-2 pb-6">
          <p className="text-slate-500 mb-2">Welcome back,</p>
          <a href="#" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                width={500}
                height={500}
                className="rounded-full w-8 h-8"
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                alt="mi-image"
              />
            </span>
            <span className="text-sm md:text-base font-bold">Sebast dev</span>
          </a>
        </div>
        <div id="nav" className="w-full px-6">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
