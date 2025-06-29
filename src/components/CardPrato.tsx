import { useState } from "react"
import "../assets/styles/card-prato.css"
import api from "../http/api"


interface CardPratoProps {
  id: number,
  nome: string,
  cozinha: string,
  descricao_resumida: string,
  valor: number,

}

async function deletarPrato(id: number) {
  try {
    console.log(id)
    await api.delete(`/pratos/${id}`)
  } catch (error) {
    console.error("Erro ao deletar prato:", error)
  }
}

const CardPratoComponent = ({ id ,nome, cozinha, descricao_resumida, valor }: CardPratoProps) => {
  return (
    <div className="card-prato">
      <div className="menu-container">
        <button className="menu-button" onClick={() => { }}>
          &#x22EE;
        </button>
        <div className="dropdown-menu">
          <a href="#" className="dropdown-item">
            Editar
          </a>
          <a href="#" className="dropdown-item">
          <button className="dropdown-item" onClick={() => deletarPrato(id)}>Deletar</button>
            
          </a>
          <a href="#" className="dropdown-item">
            Ver Detalhes
          </a>
        </div>
      </div>
      <img className="image-card" src={""} alt="" />
      <h2>{nome}</h2>
      <p>{cozinha}</p>
      <p>{descricao_resumida}</p>
      <p>R$ {valor}</p>
    </div>
  )
}

export default CardPratoComponent