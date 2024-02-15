// import CardEmpleado from "./subcomponents/CardEmpleado"
import Posteo from "./subcomponents/Posteo"

const Feed = () => {
  return (
    <>
    <div className="min-h-[90vh] bg-base-300 w-full pt-3">
      {/* Agregar funcion para dar alerta o un modal la primera vez */}
      {/* <CardEmpleado name="Fulanito de tal" prof="Profesion" /> */}
      <Posteo nombre="Juan Marquez" profesion="Arquitecto" desc="descripcion" tipo="OEmpleo" />
      <Posteo nombre="Martin Fernandez" profesion="Profesor de Guitarra" desc="descripcion" tipo="BEmpleo" />
      <Posteo nombre="Nadia Ponce" profesion="Estudiante" desc="descripcion" tipo="BEmpleo" />
      <Posteo nombre="Joaquin Gallardo" profesion="Periodista" desc="descripcion" tipo={null} />
      <Posteo nombre="Maria Suarez" profesion="Abogada" desc="descripcion" tipo="OEmpleo" />
    </div>
    </>
  )
}
export default Feed