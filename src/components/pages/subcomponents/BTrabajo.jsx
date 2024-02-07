import CardEmpleado from "./CardEmpleado";

const BTrabajo = () => {
  return (
    <div className="BTrabajo flex flex-col items-center">
      <div className="cardsHolder min-h-screen p-4 justify-center grid gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardEmpleado name="Nombre" prof="Profesion" />
        <CardEmpleado name="Nombre" prof="Profesion" />
        <CardEmpleado name="Nombre" prof="Profesion" />
        <CardEmpleado name="Nombre" prof="Profesion" />
        <CardEmpleado name="Nombre" prof="Profesion" />
        <CardEmpleado name="Nombre" prof="Profesion" />
        <CardEmpleado name="name" prof="Profesion" />
      </div>
    </div>
  );
};

export default BTrabajo;
