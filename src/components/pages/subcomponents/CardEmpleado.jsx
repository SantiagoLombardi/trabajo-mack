import { Link } from "react-router-dom";

const CardEmpleado = (props) => {
  return (
    <div className="card bg-secondary text-secondary-content m-2 max-w-[280px] max-sm:mb-4 max-sm:max-w-xl ">
      <div className="card-body justify-evenly ">
        <div className="flex justify-between ">
          <div>
            <p className="text-2xl max-w-[150px] w-[112.25px]">{props.name}</p>
            <p className="text-xl font-semibold">{props.prof}</p>
          </div>
          <div className="avatar ">
            <div className="w-24 rounded-xl overflow-visible">
              <img className="max-sm:w-150 max-sm:h-150" alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>

        <div>
          <label className="form-control w-full max-w-xs mt-4">
            <Link to="/Detalle" className="btn">
              Ver mas
              {/* ... SVG ... */}
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CardEmpleado;
