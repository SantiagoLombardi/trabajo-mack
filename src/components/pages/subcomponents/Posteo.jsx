import { Link } from "react-router-dom";
// import { useState } from "react";

const Posteo = (props) => {
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
      <div className="flex flex-col border border-[oklch(var(--nc))] rounded-lg bg-base-100 mx-4 my-5 p-3">
        <div className="publicador flex border-b pb-1 mb-3">
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
          {/* <div className={`badge relative max-md:right-[-40px] max-sm:right-[-10px] top-1 ${tipo === "OEmpleo" ? 'badge-primary' : ''} ${tipo === "BEmpleo" ? 'badge-primary' : ''} ${tipo === null ? 'hidden' : ''} `}>{badgeContent}</div> */}
        </div>
        <div className="desc">
          <p>{props.desc}</p>
        </div>
        <div>
          <label className="form-control w-full mt-4">
            <Link to="/Detalle" className="btn border-[oklch(var(--nc))]">
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