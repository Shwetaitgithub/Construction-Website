import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  HardHat,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f0e8]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-[#24211d] p-2.5 text-[#e7b85c]">
            <HardHat size={25} />
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-[#24211d]">
              BUIL<span className="text-[#c96f43]">DORA</span>
            </h1>

            <p className="text-[9px] font-bold uppercase tracking-[3px] text-[#787066]">
              Construction Studio
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold transition ${
                  isActive
                    ? "text-[#c96f43]"
                    : "text-[#5e5952] hover:text-[#c96f43]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/enquiry"
            className="group flex items-center gap-2 rounded-xl bg-[#24211d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c96f43]"
          >
            Start a Project
            <ArrowUpRight
              size={17}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-[#24211d] lg:hidden"
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/10 bg-[#f4f0e8] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-bold ${
                    isActive
                      ? "bg-white text-[#c96f43]"
                      : "text-[#45413b]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/enquiry"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#24211d] px-4 py-3 text-center font-bold text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;