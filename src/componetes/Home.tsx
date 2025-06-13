import React from "react";
import "../estilos/Home.css";
import terraDasAguas from "../assets/terra_das_aguas.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <div className="prato-card">
          <img src="https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw=" alt="Feijoada brasileira" />
          <h2 className="nome-prato">Feijoada</h2>
          <p className="cozinha-prato">Brasileira</p>
          <p className="descricao-curta-prato">Feijoada completa, com pedaços suculentos de carne suína e aquele sabor brasileiro incomparável.</p>
          <a href="#" className="btn">Ver Detalhes</a>
          {/* <Link to="/prato/1" className="btn">Ver detalhes</Link> */}
        </div>
        <div className="prato-card">
          <img src="https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw=" alt="Feijoada brasileira" />
          <h2 className="nome-prato">Feijoada</h2>
          <p className="cozinha-prato">Brasileira</p>
          <p className="descricao-curta-prato">Feijoada completa, com pedaços suculentos de carne suína e aquele sabor brasileiro incomparável.</p>
          <a href="#" className="btn">Ver Detalhes</a>
          {/* <Link to="/prato/1" className="btn">Ver detalhes</Link> */}
        </div>
        <div className="prato-card">
          <img src="https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw=" alt="Feijoada brasileira" />
          <h2 className="nome-prato">Feijoada</h2>
          <p className="cozinha-prato">Brasileira</p>
          <p className="descricao-curta-prato">Feijoada completa, com pedaços suculentos de carne suína e aquele sabor brasileiro incomparável.</p>
          <a href="#" className="btn">Ver Detalhes</a>
          {/* <Link to="/prato/1" className="btn">Ver detalhes</Link> */}
        </div>
        <div className="prato-card">
          <img src="https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw=" alt="Feijoada brasileira" />
          <h2 className="nome-prato">Feijoada</h2>
          <p className="cozinha-prato">Brasileira</p>
          <p className="descricao-curta-prato">Feijoada completa, com pedaços suculentos de carne suína e aquele sabor brasileiro incomparável.</p>
          <a href="#" className="btn">Ver Detalhes</a>
          {/* <Link to="/prato/1" className="btn">Ver detalhes</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
