import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hola!</h1>
                        <p className="py-6">Bienvenido a Red Torres, este proyecto busca ayudar a construir una red laboral en donde puedas encontrar trabajo, empleados, o nuevos clientes. podes continuar seleccionando que es lo que buscas!</p>
                        <div className='flex justify-center '>
                        <Link to="/Trabajo" className="btn btn-primary mx-1">Busco Trabajo</Link>
                        <Link to="/Empleado" className="btn btn-primary mx-1">Busco Empleados</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio