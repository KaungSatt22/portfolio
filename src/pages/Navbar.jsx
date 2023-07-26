import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const handleClick = () => {
    setIsopen(!isopen);
  };
  return (
    <div className="sticky top-0 overflow-hidden bg-slate-50 z-10">
      <nav className="flex justify-between items-center py-5 px-10 h-[10vh] shadow-lg ">
        <h2 className="text-3xl font-bold">Heaven22</h2>
        <div onClick={handleClick} className="cursor-pointer md:hidden">
          {isopen ? <IoMdClose size={40} /> : <GiHamburgerMenu size={40} />}
        </div>
        <div className="space-x-10 text-xl hidden md:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-md text-white" : ""
            }
            style={{ padding: "10px" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-md text-white" : ""
            }
            style={{ padding: "10px" }}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-md text-white" : ""
            }
            style={{ padding: "10px" }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "bg-blue-500 rounded-md text-white" : ""
            }
            style={{ padding: "10px" }}
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <div className={`${isopen ? "block" : "hidden"}`}>
        <div className="fixed inset-x-0 overflow-hidden z-10 bg-slate-50 md:hidden">
          <div className="flex flex-col items-center space-y-10 p-5  text-center ">
            <NavLink
              onClick={handleClick}
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              style={{ padding: "10px", width: "100%" }}
            >
              Home
            </NavLink>
            <NavLink
              onClick={handleClick}
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              style={{ padding: "10px", width: "100%" }}
            >
              About
            </NavLink>
            <NavLink
              onClick={handleClick}
              to="/projects"
              className={({ isActive }) =>
                isActive ? "bg-blue-400  text-white" : ""
              }
              style={{ padding: "10px", width: "100%" }}
            >
              Projects
            </NavLink>
            <NavLink
              onClick={handleClick}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-blue-400 text-white" : ""
              }
              style={{ padding: "10px", width: "100%" }}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
