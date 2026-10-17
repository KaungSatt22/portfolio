import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { profile } from "../data/content";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  [
    "relative text-sm font-semibold tracking-wide transition-colors",
    isActive ? "text-accent" : "text-ink/70 hover:text-ink",
    isActive
      ? "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-accent"
      : "",
  ].join(" ");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-[rgba(244,246,245,0.82)] backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <NavLink
          to="/"
          className="font-display text-lg font-bold tracking-tight text-ink md:text-xl"
          onClick={() => setIsOpen(false)}
        >
          {profile.name}
        </NavLink>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="cursor-pointer text-ink md:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <IoMdClose size={28} /> : <HiOutlineMenuAlt4 size={28} />}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-ink/5 bg-bg/95 md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-3 text-base font-semibold",
                    isActive ? "bg-accent-soft text-accent" : "text-ink/80",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
