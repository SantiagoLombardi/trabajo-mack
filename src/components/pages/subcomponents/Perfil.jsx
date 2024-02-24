import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"

const Perfil = () => {
  const {currentUser} = useAuth();

  return (
    <>
      <div className="fondo grid justify-items-center">
        <div className="card shrink-0 w-full max-w-sm  bg-base-100 my-4">
          <div className="card-body">
            <div className="flex justify-between">
              <div>
                <p className="text-2xl">{ currentUser? currentUser.displayName : ""}</p> <br />
                <p className="text-xl font-semibold">Profesion</p>
              </div>
              <div>
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img
                      alt=""
                      src={currentUser? currentUser.photoURL : ""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <a
                  href="mailto:SantiagoNicolaslombardi2005@gmail.com"
                  target="blank"
                  className="font-bold px-[3.25px]"
                >
                  { currentUser? currentUser.email : ""}
                </a>
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Celular</span>
                </div>
                <p className="font-bold px-[3.25px]">+54 (3583) 45-0330</p>
              </label>

              <label className="form-control w-full max-w-xs mt-4">
                <Link to='/EditarPerfil' className="btn">
                  Editar perfil
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Perfil;
