import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesPrato from './components/DetalhesPrato';
import CadastrarPrato from './components/CadastrarPrato';

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
