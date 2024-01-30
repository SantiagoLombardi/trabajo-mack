import React from 'react'
import Card from './Card'

const BEmpleado = () => {
  return (
    <div className='BEmpleado flex flex-col items-center'>
            <div role="alert" className="alert alert-info w-[95vw]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Aspirantes disponibles al momento</span>
            </div>
            <div className="cardsHolder min-h-screen p-4 justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card titulo="Titulo" desc="Lorem ipsum" />
                <Card titulo="Titulo" desc="Lorem ipsum" />
                <Card titulo="Titulo" desc="Lorem ipsum" />
                <Card titulo="Titulo" desc="Lorem ipsum" />
            </div>
        </div>
  )
}

export default BEmpleado