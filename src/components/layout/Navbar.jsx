import { Link } from "react-router-dom";
import Menu from "../pages/subcomponents/Menu";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10">
      <div className="navbar bg-base-200 ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Jobs
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="drawer drawer-end z-[1]">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="">
                <div role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
                    <h2 className="text-xl font-semibold">Santiago lombardi</h2>
                    <h2 className="pt-1">Programador</h2>
                  </div>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
                {/* Sidebar content here */}
                <li><a href='/'>Perfil</a></li>
                <li><a href='/'>Guardados</a></li>
                <li><a href='/'>Cerrar Sesion</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
