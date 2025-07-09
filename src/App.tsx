import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetalhesPrato from './components/DetalhesPrato';
import FormularioPrato from './components/FormularioPrato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path= "/formulario-prato" element={<FormularioPrato/>}/>
        <Route path= "/formulario-prato/:id" element={<FormularioPrato isEditing={true}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
