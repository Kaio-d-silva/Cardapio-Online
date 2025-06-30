import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesPrato from './components/DetalhesPrato';
import CadastrarPrato from './components/CadastrarPrato';
import EditarPrato from './components/EditarPrato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/editar-prato/:id" element={<EditarPrato/>} />
        <Route path="/cadastrar-prato" element={<CadastrarPrato />} />
      </Routes>
    </Router>
  );
}

export default App;
