import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./componetes/Home";
import DetalhesPrato from "./componetes/DetalhesPrato";
import CadastrarPrato from "./componetes/CadastrarPrato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/cadastrar-prato" element={<CadastrarPrato />} />
      </Routes>
    </Router>
  );
}

export default App;
