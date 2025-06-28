import { useState } from "react"
import "../assets/styles/home.css"
import CardPratoComponent from "../components/CardPrato"
const image = "./terra_das_aguas.jpg"


const Home = () => {

    const [pratos, setPratos] = useState([
        {
            nome : "teste",
            cozinha : "feijoada",
            imagem : "https://media.istockphoto.com/id/1428412216/pt/foto/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=is&k=20&c=gYiHyXqpjiDx9Qyb80GRyfyDNPQMRx8Mv544rwoz8Zw=",
            descricao :"comida teste",

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
                        descricao={prato.descricao}
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