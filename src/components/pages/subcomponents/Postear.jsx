const Postear = () => {
  return (
    <>
      <div className="min-h-[80vh] w-full p-4">
        <div className=" w-full ">
          <select className="select select-secondary w-full ">
            <option disabled selected>¿Que buscas?</option>
            <option>Busco Empleados</option>
            <option>Busco Trabajo</option>
            <option disabled>Vender (opcion disponible proximamente) </option>
          </select>
          <textarea className="textarea textarea-bordered min-h-[50vh] w-full my-5" placeholder="Escribe tu post aqui."></textarea>
          <div className="flex flex-row-reverse">
            <button className="btn btn-outline btn-secondary">Postear</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Postear;
