import { useAuth } from "../../../context/AuthContext";

const EditarPerfil = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="fondo grid justify-items-center">
        <div className="card shrink-0 w-full max-w-sm  bg-base-100 my-4">
          <div className="card-body">
            <div className="flex justify-between">
              <div className="w-full">
                <p className="text-2xl underline">
                  {currentUser ? currentUser.displayName : ""}
                </p>{" "}
                <br />
                {/* <p className="text-lg font-semibold">Profesion:</p> */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Profesion</span>
                  </div>
                  <input
                    type="text"
                    placeholder="¿A que te dedicas actualmente?"
                    className=" input input-bordered w-full "
                  />
                </label>
              </div>
              {/* <div>
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img
                      alt=""
                      src={currentUser? currentUser.photoURL : ""}
                    />
                  </div>
                </div>
              </div> */}
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Celular</span>
                </div>
                <input
                  type="tel"
                  placeholder="¿Cual es tu celular?"
                  className=" input input-bordered w-full "
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <span className="label-text py-[6.5px] px-[3.25px]">
                  Curriculum Vitae
                </span>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-info w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Sobre vos</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-auto"
                  placeholder="Contanos sobre vos, aca podes hablar de tu experiencia laboral, academica y demas, esta descripcion va a ser visible para quienes visiten tu perfil."
                ></textarea>
              </label>

              <label className="form-control w-full max-w-xs mt-6">
                <button className="btn btn-info">Todo listo</button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditarPerfil;
