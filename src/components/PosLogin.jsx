import React from "react";

const PosLogin = (props) => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <p>¡Gracias por ser parte de este gran proyecto!</p>
            </div>
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex justify-between" >
                <div>
                  <p className="text-4xl">Santiago Lombardi</p>
                </div>
                <div>
                <div className="skeleton w-32 h-32"></div>
                </div>
              </div>
              <div className="divider"></div>
              <div>

              <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">¿A que te dedicas?</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Ej: Abogado, Profesor, Albañil, etc."
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Celular</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="+54 (3583) 12-3456"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>

                <label className="form-control w-full max-w-xs">
                  <span className="label-text py-[6.5px] px-[3.25px]">Curriculum Vitae</span>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                  />
                </label>


                <label className="form-control w-full max-w-xs">
                <span className="label-text py-[6.5px] px-[3.25px]">Descripcion</span>
                <textarea className="textarea textarea-accent max-h-[100px]" placeholder="Contanos sobre tus conocimientos, experiencias, titulos o informacion relevante para quien te contrate."></textarea>
                </label>

                <button class="btn btn-active btn-accent mt-[10px]  w-[-webkit-fill-available]">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PosLogin;
