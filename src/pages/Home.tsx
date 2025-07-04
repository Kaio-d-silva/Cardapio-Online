import { useEffect, useState } from "react"
import "../assets/styles/home.css"
import CardPratoComponent from "../components/CardPrato"
import api from "../http/api"
const image = "./terra_das_aguas.jpg"


const Home = () => {

    const [pratos, setPratos] = useState([
        {
            id: 0,
            nome : "",
            cozinha : "",
            descricao_resumida : "",
            valor : 0,
            imagem : ""
        },
    ],)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/pratos")
                const { data } = response
                setPratos(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [pratos])


    

    return (
        <>
            <main className="main-home">
                <div className="banner">
                    {/* <img  src={image} alt="sem imagem" /> */}
                </div>
                <h1 className="titulo">Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
                <div className="container-cards">
                    {pratos.map((prato, index) => (
                        <CardPratoComponent
                        id = {prato.id}
                        nome={prato.nome}
                        cozinha={prato.cozinha}
                        descricao_resumida={prato.descricao_resumida}
                        valor={prato.valor}
                        imagem={prato.imagem}
                        />
                    ))
                    
                    }
                </div>
            </main>
        </>
    )
}

export default Home 