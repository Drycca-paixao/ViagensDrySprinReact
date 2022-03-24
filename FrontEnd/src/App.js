import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Destinos from "./views/destino";
import DestinosCreate from "./views/destino/Create";
import Passageiro from "./views/passageiro";
import PassageiroCreate from "./views/passageiro/Create";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Destino" element={<Destinos />} />
          <Route path="/Destino-Create" element={<DestinosCreate />} />
          <Route path="/Destino-Update/:idDestino" element={<DestinosCreate />} />          
          <Route path="/Passageiro" element={<Passageiro />} />
          <Route path="/Passageiro-Create" element={<PassageiroCreate />} />
          <Route path="/Passageiro-Update/:id" element={<PassageiroCreate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
