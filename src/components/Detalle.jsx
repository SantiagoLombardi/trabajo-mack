import React from 'react';

const Detalle = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 grid-cols-2">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div>
                            <img
                                className="mask mask-circle"
                                src="https://www.shutterstock.com/image-photo/close-head-shot-confident-serious-260nw-1481322794.jpg"
                            />
                        </div>
                        <h1 className="text-5xl font-bold">Pepito Perez</h1>
                        <p className="py-6">
                            Profesor de clases de Guitarra y piano con bastos conocimientos
                            egresado del conservatorio de Rosario, con experiencia previa y
                            actual en escuelas secundarias de la localidad
                        </p>
                        <button className="btn btn-primary">
                            Descargar Curriculum
                        </button>
                    </div>
                </div>
                <div style={{ gridColumnStart: 'unset', gridRowStart: 'unset' }}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                        debitis ut illo accusamus, dolorem vero. Qui quam omnis eum quas
                        molestias quos amet esse repellendus, exercitationem provident
                        tenetur recusandae commodi?
                    </p>
                </div>
            </div>
        </>
    );
};

export default Detalle;
