import React from 'react'

const Login = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Bienvenid@! 👋</h1>
                        <p className="py-6">Estas a unos pocos pasos de formar de la red laboral de Mackenna, potenciate con Mackenna Trabaja</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Busco trabajo</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Busco Empleados</span>
                                    <input type="radio" name="radio-10" className="radio checked:bg-primary" checked />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login