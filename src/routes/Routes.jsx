import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
<Routes>
  <Route path="/" element={}>
    <Route element={<Inicio />} path="/"></Route>
    <Route element={<Contacto />} path="/contacto"></Route>
    <Route element={<Blog />} path="/blog"></Route>
    <Route element={<Nosotros />} path="/nosotros"></Route>
  </Route>
</Routes>;
