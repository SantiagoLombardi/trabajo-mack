import React from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registro = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario registrado:", user);
        // Aquí puedes redirigir al usuario a la página de inicio, por ejemplo:
        navigate("/Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error al registrar usuario:", errorMessage);
      });
  };

  return (
    <>
      <div className="hero min-h-[90vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left px-3">
            <h1 className="text-5xl font-bold">¡Bienvenid@! 🚀</h1>
            <p className="py-6">
              Estas a unos pocos pasos de formar de la red laboral de Mackenna,
              potenciate con Jobs
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="joedoe@example.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="*********"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-accent btn-accent">
                  Registrarse
                </button>
              </div>
              <div className="divider mb-0">O</div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  Continuar con Google
                </button>
              </div>
              <label className="label">
                <Link
                  to="/Login"
                  className="label-text-alt link link-hover"
                >
                  ¿Ya tenes cuenta? Inicia Sesion
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
