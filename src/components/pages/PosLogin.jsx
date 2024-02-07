import React from "react";

const PosLogin = (props) => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="ml-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold">¡Solo un paso mas! 😎</h1>
            <p className="py-6">
              Agrega unos ultimos datos y tu CV para formar parte de la red laboral de Mackenna
            </p>
            <ul className="steps">
              <li className="step step-accent" data-content="✓">Registrarse</li>
              <li className="step step-accent" data-content=" ">Subir tus datos</li>
              <li className="step" data-content="★">Aplicar a un puesto</li>
            </ul>
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex justify-between" >
                <div>
                  <p className="text-4xl">Santiago Lombardi</p>
                </div>
                <div>
                <label className="form-control w-full max-w-xs">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-xl w-24">
                    <span className="text-[1rem] input-image p-1"><input
                    type="file"
                    accept="image/*"
                    className=" fixed right-0 left-0 top-0"
                    placeholder="Subir Imagen"
                  />Subir foto</span>
                  </div>
                </div> 
                  
                </label>
                
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
