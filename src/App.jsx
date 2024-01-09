import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Nosotros from "./pages/Nosotros";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutPublic />}>
          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
          <Route element={<Nosotros />} path="/nosotros"></Route>
        </Route>
        <Route element={<NotFound />} path="*"></Route>
      </Routes>
    </>
  );
};

export default App;
