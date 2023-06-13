import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Panel = () => {
  return (
    <>
      <h1>Panel</h1>
      <ul>
        <li>
          <NavLink to="/panel/inicio">Inicio</NavLink>
        </li>

        <li>
          <NavLink to="/panel/crear">Crear</NavLink>
        </li>
        <li>
          <NavLink to="/panel/usuario">Usuario</NavLink>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Panel;
