import React from "react"
import ContextoUsuario from "./ContextoUsuario"

const UsuarioProvider = ( children ) => {
  return (
    <ContextoUsuario.Provider>
        { children }
    </ContextoUsuario.Provider>
  )
}
export default UsuarioProvider