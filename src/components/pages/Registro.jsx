import { Link } from "react-router-dom";

const Registro = () => {
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Registrarse</button>
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
