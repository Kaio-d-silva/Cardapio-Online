import "../estilos/Home.css";
import terraDasAguas from "../assets/terra_das_aguas.jpg";
import CardPratoComponent from "../componetes/CardPrato";
import { useState } from "react";

function Home() {
  const [prato, setPrato] = useState([
    {
      nome : 'carreteiro',
      cozinha : 'brasileira',
      descricao : 'Comida de caminhoneiro',
      imagem : 'https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=640,h=310,fit=cover/wp-content/uploads/2025/03/arroz-carreteiro-scaled.png'
    },
    {
      nome : 'carreteiro',
      cozinha : 'brasileira',
      descricao : 'Comida de caminhoneiro',
      imagem : 'https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=640,h=310,fit=cover/wp-content/uploads/2025/03/arroz-carreteiro-scaled.png'
    },
    {
      nome : 'carreteiro',
      cozinha : 'brasileira',
      descricao : 'Comida de caminhoneiro',
      imagem : 'https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=640,h=310,fit=cover/wp-content/uploads/2025/03/arroz-carreteiro-scaled.png'
    },
    {
      nome : 'carreteiro',
      cozinha : 'brasileira',
      descricao : 'Comida de caminhoneiro',
      imagem : 'https://catracalivre.com.br/cdn-cgi/image/f=auto,q=60,w=640,h=310,fit=cover/wp-content/uploads/2025/03/arroz-carreteiro-scaled.png'
    },
  ]);

  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        {prato.map((prato, index) => (
          <CardPratoComponent 
          key = {index}
          nome={prato.nome}
          cozinha={prato.cozinha}
          descricao={prato.descricao}
          imagem={prato.imagem}
          />

        ))}
      </div>
    </div>
  );
}

export default Home;
