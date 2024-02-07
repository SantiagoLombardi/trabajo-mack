import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl font-bold">¡Hola! 👋</h1>
            <p className="py-6">
              ¡Bienvenido al espacio donde encontraras el mejor trabajo, empleado y cliente! Cambia tu vida con un simple click, el momento de hacer lo que te apasiona llegó.
            </p>
						{/* <h2 className="text-3xl font-semibold underline " >¿Cual es tu objetivo?</h2> */}
            <div className="flex justify-center ">
              <Link to="/Registrarse" className="btn btn-accent mx-1">
                Unirme 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// bienvenida
export default Inicio;
