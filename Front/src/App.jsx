import {
  Home,
  Services,
  Contact,
  About,
  Customers,
  DownloadEbook,
} from "./pages";
import { Routes, Route, HashRouter } from "react-router-dom";
import { FloatingBar, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="pt-[65px]">
        <Navbar />
        <FloatingBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/clientes" element={<Customers />} />
          <Route path="/descargar-ebook" element={<DownloadEbook />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
