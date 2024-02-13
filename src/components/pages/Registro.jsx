import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebaseConfig";
import { AuthContext } from "../../context/AuthContext"

const Registro = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // El usuario ha iniciado sesión con Google
        const user = result.user;
        console.log("Usuario registrado con Google:", user);
        // Redirigir al usuario a la página de inicio después del registro
        setIsAuthenticated(true)
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al iniciar sesión con Google:", errorMessage);
      });
  };

  return (
    <>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left px-3">
            <h1 className="text-5xl font-bold">¡Bienvenid@! 🚀</h1>
            <p className="py-6">
              Estás a unos pocos pasos de formar parte de la red laboral de Mackenna,
              poténciate con Jobs
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm ">
            <form className="card-body">
              <div className="form-control mt-6">
                <button type="button" onClick={handleGoogleSignIn} className="btn btn-info">
                  Registrarse con Google
                </button>
              </div>
              <label className="label">
                <Link
                  to="/IniciarSesion"
                  className="label-text-alt link link-hover"
                >
                  ¿Ya tienes cuenta? Inicia Sesión
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
