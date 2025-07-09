import { useState, useEffect } from "react";
// import "../assets/styles/cadastro-prato.css"
import api from "../http/api";
import { useNavigate, useParams } from "react-router-dom";
import Snackbar from "./SnackBar";

interface SnackbarState {
  message: string;
  type?: "success" | "error" | "warning" | "info"; // Torna o tipo opcional
  duration: number;
}

const EditarPrato = () => {
  const { id } = useParams<{ id: string }>();
  const [nome, setNome] = useState("");
  const [cozinha, setCozinha] = useState("");
  const [descricaoResumida, setDescricaoResumida] = useState("");
  const [descricaoDetalhada, setDescricaoDetalhada] = useState("");
  const [valor, setValor] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    message: "",
    type: "success",
    duration: 0,
  });

  useEffect(() => {
    async function fetchData(id: string | undefined) {
      try {
        const response = await api.get(`/pratos/${id}`);
        const { data } = response;
        // setPratos(data)
        setNome(data.nome);
        setCozinha(data.cozinha);
        setDescricaoResumida(data.descricao_resumida);
        setDescricaoDetalhada(data.descricao_detalhada);
        setValor(data.valor);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(id);
  }, [id]);

  async function editarPrato(id: number) {
    try {
      const response = await api.put(`/pratos/${id}`, {
        nome: nome,
        cozinha: cozinha,
        descricao_resumida: descricaoResumida,
        descricao_detalhada: descricaoDetalhada,
        valor: Number(valor),
      });
      // const { status } = response

      // if(status === 200){
      //     Snackbar({message : "Prato editado com sucesso", type: "success", duration: 100})
      // }

      setSnackbar({
        message: "Prato editado com sucesso",
        type: "success",
        duration: 10000,
      });
    } catch (error) {
      console.log(error);
      console.log("teste");
    }
  }

  const navigate = useNavigate();

  function voltar() {
    navigate("/");
  }

  return (
    <>
      <main className="Main-Cadastro">
        <div className="Container-cadastro">
          <h1>Cadastro de prato</h1>
          <div className="Container-inputs">
            <div className="Inputs">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                placeholder="Ex: Feijoada"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <label htmlFor="cozinha">Cozinha</label>
              <input
                type="text"
                id="cozinha"
                placeholder="Ex: Brasileira"
                value={cozinha}
                onChange={(e) => setCozinha(e.target.value)}
              />

              <label htmlFor="descricao-resumida">Descrição Resumida</label>
              <input
                type="text"
                id="descricao-resumida"
                placeholder="Ex: Prato típico brasileiro"
                value={descricaoResumida}
                onChange={(e) => setDescricaoResumida(e.target.value)}
              />

              <label htmlFor="descricao-detalhada">Descrição Detalhada</label>
              <input
                type="text"
                id="descricao-detalhada"
                placeholder="Ex: Feijoada é um prato tradicional da culinária brasileira, preparado com feijão preto, carne de porco, linguiça, e acompanhado de arroz, farofa, couve refogada e laranja."
                value={descricaoDetalhada}
                onChange={(e) => setDescricaoDetalhada(e.target.value)}
              />
              <label htmlFor="valor">Descrição Detalhada</label>
              <input
                type="text"
                id="valor"
                placeholder="R$ 50.00"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>
          </div>
          <div className="Layout-botao">
            <button
              className="Button-cadastro"
              onClick={() => {
                if (id) {
                  editarPrato(Number(id));
                }
              }}
            >
              Editar
            </button>

            <button className="Button-cadastro" onClick={voltar}>
              Voltar
            </button>
          </div>
          
          <div>
            teste
          </div>
        </div>
      </main>
    </>
  );
};

export default EditarPrato;
