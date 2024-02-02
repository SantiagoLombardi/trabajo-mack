import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  gap-0">
          <div className="card shadow-2xl shrink-0 w-full bg-base-100 lg:flex-row ">
            <div className="max-w-sm">
              <form className="card-body pb-0">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nombres</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Juan"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Apellidos</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Fernandez"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="border border-[var(--fallback-bc,oklch(var(--bc)/.2))] border-solid  px-[13px] py-[8px] rounded-lg mt-[6.5px] ">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Busco trabajo</span>
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-[oklch(var(--a))]"
                        checked
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Busco Empleados</span>
                      <input
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-[oklch(var(--a))]"
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="  max-w-sm  ">
              <form className="card-body max-sm:pt-[6.5px]">
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
                    <span className="label-text">Contraseña</span>
                  </label>
                  <input
                    type="password"
                    placeholder="*********"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Registrarte</button>
                </div>
                <div className="divider mb-0">O</div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">
                    Continuar con Google
                  </button>
                </div>
                <label className="label">
                  <Link to="/Login" className="label-text-alt link link-hover">
                    ¿Ya tenes cuenta? Inicia Sesion
                  </Link>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
