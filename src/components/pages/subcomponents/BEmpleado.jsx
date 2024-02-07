import React from 'react'
import CardTrabajo from './CardTrabajo'

const BEmpleado = () => {
  return (
    <div className='BEmpleado flex flex-col items-center'>
            <div className="cardsHolder min-h-screen p-4 justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <CardTrabajo titulo="Puesto" desc="Empresa" />
            </div>
        </div>
  )
}

export default BEmpleado