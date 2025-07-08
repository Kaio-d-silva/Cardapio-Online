import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../http/api"
import "../assets/styles/formulario-prato.css"

const FormularioPrato = ({ isEditing = false }) => {

    const { id } = useParams<{ id: string }>()
    const [nome, setNome] = useState("")
    const [cozinha, setCozinha] = useState("")
    const [descricaoResumida, setDescricaoResumida] = useState("")
    const [descricaoDetalhada, setDescricaoDetalhada] = useState("")
    const [valor, setValor] = useState("")


    useEffect(() => {
        if (isEditing) {

            const fetchData = async (id: string) => {
                const response = await api.get(`/pratos/${id}`)
                const { data } = response

                setNome(data.nome)
                setCozinha(data.cozinha)
                setDescricaoResumida(data.descricao_resumida)
                setDescricaoDetalhada(data.descricao_detalhada)
                setValor(data.valor)

            }

            if (id) {
                fetchData(id)
            }
        }

    }, [id, isEditing])

    const editarPrato = async (id: number) => {
        try {
            const response = await api.put(`/pratos/${id}`,
                {
                    nome: nome,
                    cozinha: cozinha,
                    descricao_resumida: descricaoResumida,
                    descricao_detalhada: descricaoDetalhada,
                    valor: Number(valor)

                }
            )
            const { data } = response
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }
    const cadastrarPrato = async () => {
        try {
            const response = await api.post("/pratos",
                {
                    nome: nome,
                    cozinha: cozinha,
                    descricao_resumida: descricaoResumida,
                    descricao_detalhada: descricaoDetalhada,
                    valor: Number(valor)

                }
            )
            const { data } = response
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    const navigate = useNavigate()
    
    function voltar(){
      navigate("/")
    }



    return (
        <>
            <main className="Main-Cadastro">
                <div className="Container-cadastro">
                    <div className="button-voltar">
                    <button
                        onClick={voltar}
                        ></button>
                    </div>
                    {isEditing && (<h1>Edição do prato</h1>)}
                    {isEditing === false && (<h1>Cadastro do prato</h1>)}

                    <div className="Container-inputs">
                        <div className="Inputs">
                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Ex: Feijoada"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                style={{
                                    backgroundColor: nome?.length < 1 ? "#eeeded" : "#ffff" 
                                }}
                                />

                            <label htmlFor="cozinha">Cozinha</label>
                            <input
                                type="text"
                                id="cozinha"
                                placeholder="Ex: Brasileira"
                                value={cozinha}
                                onChange={(e) => setCozinha(e.target.value)} 
                                style={{
                                    backgroundColor: cozinha?.length < 1 ? "#eeeded" : "#ffff" 
                                }}
                                />

                            <label htmlFor="descricao-resumida">Descrição Resumida</label>
                            <input
                                type="text"
                                id="descricao-resumida"
                                placeholder="Ex: Prato típico brasileiro"
                                value={descricaoResumida}
                                onChange={(e) => setDescricaoResumida(e.target.value)} 
                                style={{
                                    backgroundColor: descricaoResumida?.length < 1 ? "#eeeded" : "#ffff"
                                }}
                                />

                            <label htmlFor="descricao-detalhada">Descrição Detalhada</label>
                            <input
                                type="text"
                                id="descricao-detalhada"
                                placeholder="Ex: Feijoada é um prato tradicional da culinária brasileira, preparado com feijão preto, carne de porco, linguiça, e acompanhado de arroz, farofa, couve refogada e laranja."
                                value={descricaoDetalhada}
                                onChange={(e) => setDescricaoDetalhada(e.target.value)} 
                                style={{
                                    backgroundColor: descricaoDetalhada?.length < 1 ? "#eeeded" : "#ffff" 
                                }}
                                />
                            <label htmlFor="valor">Descrição Detalhada</label>
                            <input
                                type="text"
                                id="valor"
                                placeholder="R$ 50.00"
                                value={valor}
                                onChange={(e) => setValor(e.target.value)} 
                                style={{
                                    backgroundColor: valor?.length < 1 ? "#eeeded" : "#ffff"
                                }}
                                />
                        </div>
                    </div>
                    <div className="Layout-botao">
                        {isEditing && (<button
                            className="Button-cadastro"
                            onClick={() => {
                                if (id) {
                                    editarPrato(Number(id));
                                }
                            }}
                        >Editar</button>)}

                        {isEditing === false && (
                            <button
                                className="Button-cadastro"
                                onClick={cadastrarPrato}
                            >Cadastrar</button>
                        )}

                        

                    </div>

                </div>

            </main>
        </>
    )
}

export default FormularioPrato