import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { createPost } from "../../../firebaseConfig";

const Postear = () => {
  const { currentUser } = useAuth();
  const [content, setContent] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const [toastOpen, setToastOpen] = useState(false);
  const [error, setError] = useState(null);

  const handlePostear = async () => {
    try {
      // Verificar si hay contenido en el post y si se seleccionó una opción
      if (!content.trim() || !selectedOption) {
        setError("El contenido del post y la opción seleccionada son obligatorios");
        return;
      }
      // Crear un nuevo post con el contenido actual, la opción seleccionada y el ID del usuario actual
      await createPost(currentUser.uid, content);
      // Limpiar el campo de contenido y la opción seleccionada después de publicar
      setContent("");
      setSelectedOption("");
      console.log("Post creado correctamente");
      setToastOpen(true);
      setTimeout(() => {
        setToastOpen(false);
        navigate("/");
      }, 3000); // 3 segundos de espera antes de cerrar el toast y redirigir
    } catch (error) {
      console.error("Error al intentar publicar el post:", error);
      setError("Error al intentar publicar el post: " + error.message);
    }
  };

  return (
    <>
      <div className="min-h-[80vh] w-full p-4">
        <div className=" w-full ">
          <select
            className="select select-secondary w-full"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option disabled value="">
              ¿Qué buscas?
            </option>
            <option value="Busco Empleados">Busco Empleados</option>
            <option value="Busco Trabajo">Busco Trabajo</option>
            <option value="Otros">Otros</option>
            <option disabled>Vender (opción disponible próximamente)</option>
          </select>
          {error && (
            <div role="alert" className="alert alert-error mt-5 flex" style={{textAlign: '-webkit-left'}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}
          <textarea
            className="textarea textarea-bordered min-h-[50vh] w-full my-5"
            placeholder="Escribe tu post aquí."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex flex-row-reverse">
            <button
              className="btn btn-outline btn-secondary"
              onClick={handlePostear}
            >
              Postear
            </button>
          </div>
        </div>
      </div>
      {/* Toast para mostrar mensaje de éxito */}
      {toastOpen && (
        <div className="toast toast-top toast-end fixed z-50  mt-[80vh] ">
          <div className="alert alert-success">
            <span>Posteo exitoso! Redirigiendo a feed.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Postear;
