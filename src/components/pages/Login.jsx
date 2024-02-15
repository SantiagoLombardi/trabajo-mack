import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebaseConfig";
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuario registrado con Google:", user);
      // Redirigir al usuario a la página de inicio después de iniciar sesión
      setIsAuthenticated(true)
    } catch (error) {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error al iniciar sesión con Google:", errorMessage);
    }
  };

  return (
    <>
      <div className="hero min-h-[90vh] bg-base-200 mb-[52px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">¡Bienvenid@ devuelta! 👋</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm ">
            <form className="card-body">
              <div className="form-control mt-6">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-primary"
                >
                  Iniciar Sesión con Google
                </button>
              </div>
              <label className="label">
                <Link
                  to="/Registrarse"
                  className="label-text-alt link link-hover"
                >
                  ¿No tenes cuenta? Registrate
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
