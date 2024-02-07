import React from "react";
import { Link } from "react-router-dom";

const Detalle = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="text-sm breadcrumbs fixed z-0 top-[90px] left-[115px] max-md:hidden">
          <ul>
            <li>
              <Link to="/Portal">Portal</Link>
            </li>
            <li>
              <a href="/" >Perfil</a>
            </li>
            
          </ul>
        </div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <p className="text-2xl">Santiago Lombardi</p> <br />
                  <p className="text-xl font-semibold">Programador</p>
                </div>
                <div>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                  <a href="mailto:SantiagoNicolaslombardi2005@gmail.com" target="blank" className="font-bold px-[3.25px]">SantiagoNicolasLombardi2005@gmail.com</a>
                </label>

                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Celular</span>
                  </div>
                  <p className="font-bold px-[3.25px]">+54 (3583) 45-0330</p>
                </label>

                <label className="form-control w-full max-w-xs mt-4">
                  <button className="btn">
                    Descargar CV
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Interface / Download">
                          {" "}
                          <path
                            id="Vector"
                            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </button>
                </label>
              </div>
            </div>
          </div>

					<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body min-h-[336px] h-auto">
							<h2 className="text-xl font-semibold">Mas sobre Santiago:</h2>
              <p>Soy Desarrollador FrontEnd Jr, mi objetivo es completar el stack MERN, actualmente manejo ReactJS y NodeJS, faltando expandir mis conocimientos en ExpressJS y en MongoDB. Actualmente para bases de datos utilizo Firebase y los servicios de Cloud de Google. Academicamente estoy cursando la Licenciatura en Ciencias de la Computación en la UNRC y estoy certificado en Desarrollo Web por CoderHouse </p>

							<div className="join">
								<a href="https://api.whatsapp.com/send?phone=543583450330" target="blank" className="btn join-item bg-[#075e54] w-[-webkit-fill-available] hover:bg-[#075e54] border-[#128c7e] rounded-lg">Contactar en Whatsapp
								<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></g></svg>
								</a>
							</div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Detalle;
