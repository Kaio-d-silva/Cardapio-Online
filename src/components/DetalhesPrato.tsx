import React, { useState, useEffect } from "react";
import "../assets/styles/detalhes-prato.css"; // Importando o CSS específico para o componente
import api from "../http/api";
import { useNavigate, useParams } from "react-router-dom";

interface PratoProps {
    nome: string,
    cozinha: string,
    descricao_resumida: string,
    valor: number,
    imagem: string
}



function DetalhesPrato() {
    const { id } = useParams<{ id: string }>()
    const [prato, setPrato] = useState<PratoProps>({
        nome : "",
        cozinha : "",
        descricao_resumida : "",
        valor : 0,
        imagem : ""
    })

    useEffect(() => {
        async function fetchData(id: string | undefined) {
            try {
                const response = await api.get(`/pratos/${id}`)
                const { data } = response
                setPrato(data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchData(id)
    }, [id])

    const navigate = useNavigate()

    function voltar(){
      navigate("/")
    }

  return (
    <>
      <div className="detalhes-prato">
        <div className="detalhes-prato-card">
          <div className="detalhes-prato-card-header">
            <img
              src={prato.imagem}
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
          <button onClick={voltar}>Voltar</button>
        </div>
      </div>
    </>
  );
}

export default DetalhesPrato;
