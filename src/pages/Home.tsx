import { useEffect, useState } from "react"
import "../assets/styles/home.css"
import CardPratoComponent from "../components/CardPrato"
import api from "../http/api"
const image = "./terra_das_aguas.jpg"


const Home = () => {

    useEffect(() => {
        async function fetchData() {
            try{
            const response =  await api.get("/pratos")
            const {data} = response
            console.log(data.error)
            setPratos(data)
            } catch (error){
            console.log(error)
        }
        }

        fetchData()

    },[])


    const [pratos, setPratos] = useState([
        {
            nome : "",
            cozinha : "",
            descricao_resumida : "",
            valor : 0,
        },
    ],)

    return (
        <>
            <main className="main-home">
                <div className="banner">
                    <img  src={image} alt="sem imagem" />
                </div>
                <h1 className="titulo">Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
                <div className="container-cards">
                    {pratos.map((prato, index) => (
                        <CardPratoComponent
                        nome={prato.nome}
                        cozinha={prato.cozinha}
                        descricao_resumida={prato.descricao_resumida}
                        valor={prato.valor}
                        />
                    ))
                    
                    }
                </div>
            </main>
        </>
    )
}

export default Home 