import CardEmpleado from "./subcomponents/CardEmpleado"
import Posteo from "./subcomponents/Posteo"

const Feed = () => {
  return (
    <>
    <div className="min-h-[90vh] bg-base-300 w-full pt-3">
      {/* <CardEmpleado name="Fulanito de tal" prof="Profesion" /> */}
      <Posteo/>
      <Posteo/>
      <Posteo/>
      <Posteo/>
      <Posteo/>
    </div>
    </>
  )
}
export default Feed