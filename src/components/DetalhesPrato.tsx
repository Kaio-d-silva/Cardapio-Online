import React, { useState } from "react";
import "../assets/styles/detalhes-prato.css"; // Importando o CSS específico para o componente
import api from "../http/api";

interface PratoProps {
    nome: string,
    cozinha: string,
    descricao_resumida: string,
    valor: number,
}



function DetalhesPrato() {
    const [prato, setPrato] = useState<PratoProps>({
        nome : "",
        cozinha : "",
        descricao_resumida : "",
        valor : 0,
    })


    async function getDetails (){
      // const response = api.get(`/pratos/${id}`)
    } 


  return (
    <>
      <div className="detalhes-prato">
        <div className="detalhes-prato-card">
          <div className="detalhes-prato-card-header">
            <img
              src=""
              alt="prato"
            />
            <div className="detalhes-prato-card-header-texto">
              <h1>{prato.nome}</h1>
              <p>
                <strong>Cozinha:</strong>{prato.cozinha}
              </p>
              <p>
                <strong>Valor:</strong> R$ {prato.valor}
              </p>
            </div>
          </div>
          <p>
            <strong>{prato.descricao_resumida}</strong>
          </p>
          <button onClick={() => {}}>Voltar</button>
        </div>
      </div>
    </>
  );
}

export default DetalhesPrato;
