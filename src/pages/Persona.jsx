import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Persona = () => {
  let { nombre, apellido } = useParams();

  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    nombre = e.target.nombre.value;
    apellido = e.target.apellido.value;

    if (nombre === "contacto") {
      navegar(`/contactos`);
    } else if (nombre === "articulo" || nombre === "articulos") {
      navegar(`/articulos`);
    } else {
      navegar(`/persona/${nombre}/${apellido}`);
    }
  };
  return (
    <div>
      <p>
        Hola {nombre} {apellido}
      </p>

      <form onSubmit={enviar}>
        <input type="text" placeholder="Nombre" name="nombre" />
        <input type="text" placeholder="Apellido" name="apellido" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Persona;
