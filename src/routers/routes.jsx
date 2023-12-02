import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home";
import { Centrocostos } from "../pages/Centrocostos";
import { Area } from "../pages/Area";
import { Tareas } from "../pages/Tareas";
import { Clientes } from "../pages/Clientes";
import { Proyectos } from "../pages/Proyectos";
import { Usuarios } from "../pages/Usuarios";
import { Configuracion } from "../pages/Configuracion";

import { Test } from "../pages/Test";
import { Test2 } from "../pages/Test2";

export function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/centrocostos" element={<Centrocostos />} />
      <Route path="/area" element={<Area />} />
      <Route path="/tareas" element={<Tareas />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/configuracion" element={<Configuracion />} />
      <Route path="/test" element={<Test />} />
      <Route path="/test2" element={<Test2 />} />
    </Routes>
  );
}
