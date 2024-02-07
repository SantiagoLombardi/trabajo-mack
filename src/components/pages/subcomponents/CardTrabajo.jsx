const CardTrabajo = (props) => {
  return (
    <>
      <div className="card md:max-w-[-webkit-fill-available] bg-secondary text-primary-content min-w-48 h-fit m-1 sm:w-[300px]  ">
        <div className="card-body ">
          <h2 className="card-title"> {props.titulo}</h2>
          <p>{props.desc}</p>
          <div className="card-actions justify-end">
            <a href="/" className="btn">Ver mas</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardTrabajo;
