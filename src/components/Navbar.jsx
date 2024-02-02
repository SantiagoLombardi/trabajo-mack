import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
    if (isDropdownOpen) {
      setDropdownOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div
        className={`navbar sticky ${
          isSticky ? " top-0 shadow-md" : ""
        } bg-base-100`}
        style={{ zIndex: isSticky ? 10 : 1 }}
      >
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Red Torres
          </Link>
        </div>
        <div className="flex-none gap-2">
          {/* <ul className="menu menu-horizontal px-1">
						<li>
							<details>
								<summary>
									¿Que Buscas?
								</summary>
								<ul className="p-2 bg-base-100 rounded-t-none">
									<li><Link to="/Trabajo">Trabajo</Link></li>
									<li><Link to="/Empleado">Empleados</Link></li>
								</ul>
							</details>
						</li>
					</ul> */}

          <div className="form-control">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered w-28 md:w-auto sm:w-48"
            />
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

/* 

className={`navbar ${isSticky ? 'sticky top-0 shadow-md' : ''} bg-base-100`}
		style={{ zIndex: isSticky ? 10 : 1 }}

*/
