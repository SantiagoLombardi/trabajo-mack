import Feed from "../pages/Feed"
import Inicio from "../pages/Inicio"

let sesionActiva = false

const Home = () => {
  return (
    <>
      {sesionActiva? <Feed/> : <Inicio/>}
    </>
  )
}
export default Home