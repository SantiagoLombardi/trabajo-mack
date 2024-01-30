import React from 'react'
import Card from './Card'

const CardsHolder = () => {
  return (
    <>
        <div className="cardsHolder min-h-screen p-4 justify-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card titulo="Titulo" desc="Lorem ipsum" />
            <Card titulo="Titulo" desc="Lorem ipsum" />
            <Card titulo="Titulo" desc="Lorem ipsum" />
            <Card titulo="Titulo" desc="Lorem ipsum" />
        </div>
    </>
  )
}
// flex flex-wrap justify-between content-start
export default CardsHolder