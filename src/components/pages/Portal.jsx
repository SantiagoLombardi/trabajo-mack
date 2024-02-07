import BTrabajo from "./subcomponents/BTrabajo";
import BEmpleado from "./subcomponents/BEmpleado";


const usuarioSwitch = (u) => {
  if ( u === "BTrabajo" ) {
    return <BTrabajo/>
  } else if ( u === "BEmpleado" ) {
    return <BEmpleado/>
  } else {
    return "Error de sesion, porfavor refresque la pagina e inicie sesion nuevamente"
  }
};

const Portal = () => {
  let usuario = "BTrabajo"

  return (
    <div className="flex flex-col items-center bg-base-200">
			<h1 className="text-3xl font-bold underline p-2 mt-2 bg-primary rounded-xxl text-primary-content">Portal de busqueda</h1>
      { usuarioSwitch(usuario) }
    </div>
  );
};
export default Portal;
