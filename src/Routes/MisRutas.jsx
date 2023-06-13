import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Contactos from "../pages/Contactos";
import Articulos from "../pages/Articulos";
import Persona from "../pages/Persona";
import Panel from "../panel/Panel";
import PanelInicio from "../panel/PanelInicio";
import PanelCrear from "../panel/PanelCrear";
import PanelUsuario from "../panel/PanelUsuario";

export const MisRutas = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={(datos) => {
                  return datos.isActive ? "isActive" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactos"
                className={({ isActive }) => {
                  return isActive ? "isActive" : "";
                }}
              >
                Contactos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/articulos"
                className={({ isActive }) => {
                  return isActive ? "isActive" : "";
                }}
              >
                Articulos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/panel"
                className={({ isActive }) => {
                  return isActive ? "isActive" : "";
                }}
              >
                Panel
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/persona/:nombre/:apellido" element={<Persona />} />
          <Route path="/redirigir" element={<Navigate to="/" />} />
          <Route path="*" element={<h1>404</h1>} />

          <Route path="/panel/*" element={<Panel />}>
            <Route index element={<PanelInicio />} />
            <Route path="inicio" element={<PanelInicio />} />
            <Route path="crear" element={<PanelCrear />} />
            <Route path="usuario" element={<PanelUsuario />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
