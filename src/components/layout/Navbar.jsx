import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Menu from "../pages/subcomponents/Menu";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout,currentUser } = useAuth();

  const [authenticated, setAuthenticated] = useState(isAuthenticated);

  useEffect(() => {
    setAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  const handleLogout = () => {
      logout();
      navigate("/")
  };
  return (
    <div className="sticky top-0 z-10 shadow-md">
      <div className="navbar bg-base-200 ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Jobs
          </Link>
        </div>
        <div className="flex-none gap-2">
          { authenticated ? <div className="drawer drawer-end z-[1]">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="">
                <div role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={currentUser? currentUser.photoURL : ""}
                    />
                  </div>
                </div>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <div className="flex justify-between mx-[13px] my-[6.5px] py-8 border-neutral-content border-b-[1px]">
                  <div>
                    <h2 className="text-xl font-semibold">{ currentUser? currentUser.displayName : ""}</h2>
                    <h2 className="pt-1">Profesion</h2>
                  </div>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img alt="" src={ currentUser ? currentUser.photoURL : "" }  />
                    </div>
                  </div>
                </div>
                {/* Sidebar content here */}
                <li><Link to='/Perfil' >Perfil</Link></li>
                <li><button >Guardados</button></li>
                <li><button onClick={handleLogout}>Cerrar Sesion</button></li>
              </ul>
            </div>
          </div> : null }
        </div>
      </div>
      { authenticated && location.pathname === "/" ? <Menu /> : null }
    </div>
  );
};

export default Navbar;
