import "../assets/styles/card-prato.css"
import api from "../http/api"
import { useNavigate } from "react-router-dom"


interface CardPratoProps {
  id: number,
  nome: string,
  cozinha: string,
  descricao_resumida: string,
  valor: number,
  imagem: string

}



const CardPratoComponent = ({ id, nome, cozinha, descricao_resumida, valor, imagem }: CardPratoProps) => {
  async function deletarPrato(id: number) {
    try {
      console.log(id)
      await api.delete(`/pratos/${id}`)
    } catch (error) {
      console.error("Erro ao deletar prato:", error)
    }
  }

  const navigate = useNavigate()

  function editarPrato(id: number) {
    navigate(`/formulario-prato/${id}`)

  }
  function verDetalhes(id: number) {
    navigate(`/detalhes-prato/${id}`)

  }





  return (
    <div className="card-prato">
      <div className="menu-container">
        <button className="menu-button" onClick={() => { }}>
          	&#8230;
        </button>
        <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => editarPrato(id)}>Editar</button>
            
            <button className="dropdown-item" onClick={() => deletarPrato(id)}>Deletar</button>
            
            <button className="dropdown-item" onClick={() => verDetalhes(id)}>Ver Detalhes</button>
          
        </div>
      </div>
      <img className="image-card" src={imagem} alt="" />
      <h2>{nome}</h2>
      <p>{cozinha}</p>
      <p>{descricao_resumida}</p>
      <p>R$ {valor}</p>
    </div>
  )
}

export default CardPratoComponent