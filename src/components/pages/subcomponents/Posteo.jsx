import { Link } from "react-router-dom";
// npm 
  
const Posteo = (props) => {
  let borderColor
  if (props.tipo === "OEmpleo") {
    borderColor = "oklch(var(--in))"
  } else if (props.tipo === "BEmpleo") {
    borderColor = "oklch(var(--s))"
  } else {
    borderColor = "white"
  }

  // const [tipo, setTipo] = useState(null)
  // let badgeContent = ""

  // if (props.tipo === "BEmpleo") {
  //   setTipo("BEmpleo")
  //   badgeContent = "Busca Empleo"
  // } else if (props.tipo === "OEmpleo") {
  //   setTipo("OEmpleo")
  //   badgeContent = "Ofrece Empleo"
  // };


  return (
    <>
      <div className={`flex flex-col border border-[${borderColor}] rounded-2xl bg-base-100 mx-4 my-5 p-3`}>
        <div className={`publicador flex border-b border-[${borderColor}] pb-1 mb-3  `}>
          <div className="mr-2">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{props.nombre}</h2>
            <h3>{props.profesion}</h3> 
          </div>
          { props.tipo === "OEmpleo" ? <div className="badge relative max-md:right-[-40px] max-sm:right-[-10px] top-1 badge-info"> Desea contratar </div> : null }
          { props.tipo === "BEmpleo" ? <div className="badge relative max-md:right-[-40px] max-sm:right-[-10px] top-1 badge-secondary"> Desea trabajar </div> : null }
        </div>
        <div className="desc">
          <p>{props.desc}</p>
        </div>
        <div>
          <label className="form-control w-full mt-4">
            <Link to="/Detalle" className={`btn border-[${borderColor}]`}>
              Ver mas
              {/* ... SVG ... */}
            </Link>
          </label>
        </div>
      </div>

    </>
  )
}
export default Posteo