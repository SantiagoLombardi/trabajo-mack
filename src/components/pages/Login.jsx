import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="hero min-h-[90vh] bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">¡Bienvenid@ devuelta! 👋</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="*********"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="/recuperar-contrena" className="label-text-alt link link-hover">
                    ¿Olvidaste tu contraseña?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Iniciar Sesion</button>
              </div>
              <div className="divider mb-0">O</div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  Iniciar Sesion con Google
                </button>
              </div>
              <label className="label">
                <Link to="/Registrarse" className="label-text-alt link link-hover">
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
