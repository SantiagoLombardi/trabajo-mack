import { Link } from "react-router-dom"

const Posteo = () => {
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
            <h2 className="text-xl font-semibold">Nombre Apellido</h2>
            <h3>Puesto</h3>
          </div>
          <div className="badge badge-primary relative max-md:right-[-40px] max-sm:right-[-10px] top-1">Ofrece Empleo</div>
        </div>
        <div className="desc">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores ullam officiis quo? Minima maiores culpa nulla, expedita nobis adipisci aliquam aliquid sequi, atque, perferendis sapiente voluptatibus. Cupiditate, autem porro.</p>
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