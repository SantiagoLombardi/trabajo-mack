import { useState, createContext } from "react"

const ContextoUsuario = createContext();


const crearUsuarioBTrabajo = (props) => {
    const [userBTrabajo, setUserBTrabajo] = useState(null);
    
    setUserBTrabajo({
        nombre: props.nombre,
        apellidos: props.apellidos,
        queBusca: props.queBusca,
        profOEm: props.profesion,
        mail: props.mail,
        telefono: props.telefono,
        contrasena: props.contrasena,
        imgUrl: props.imgUrl,
        desc: props.desc
    })
};

const crearUsuarioBEmpleado = (props) => {
    const [userBEmpleado, setUserBEmpleado] = useState(null);
    setUserBEmpleado({
        nombre: props.nombre,
        apellidos: props.apellidos,
        queBusca: props.queBusca,
        profOEm: props.empresa,
        mail: props.mail,
        telefono: props.telefono,
        contrasena: props.contrasena,
        imgUrl: props.imgUrl,
        desc: props.desc
    })
};

let usuariosDePrueba = [{
    nombre: "Santiago",
    apellidos: "Lombardi",
    profOEm: "Programador",
    mail: "SantiagoNicolasLombardi@gmail.com",
    telefono: "3583450330",
    queBusca: "Trabajo",
    contrasena: "Admin123",
    imgUrl: "",
    desc: "descripcion"
},{
    nombre: "Salvador",
    apellidos: "Serravale",
    profOEm: "Municipalidad de Vicuña Mackenna",
    mail: "SalvadorS@gmail.com",
    telefono: "3583123456",
    queBusca: "Empleado",
    contrasena: "Admin123",
    imgUrl: "",
    desc: "descripcion"
}]

const usarUsuario = () => {
    const [user, setUser] = useState(null)
    
    setUser(usuariosDePrueba[0])

    console.log("usuario creado")
}

usarUsuario()

export default ContextoUsuario
