import "../assets/styles/home.css"
const image = "./terra_das_aguas.jpg"

const Home = () => {
    return (
        <>
            <main className="main-home">
                <div >
                    <img className="image-backgroud" src={image} alt="sem imagem" />
                </div>
                <h1>Bem vindo ao restaurante terra das aguas</h1>
                    <div className="container-cards">
                        <div className="card-prato">
                            <img className="image-card" src="https://media.istockphoto.com/id/1428412216/pt/foto/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=is&k=20&c=gYiHyXqpjiDx9Qyb80GRyfyDNPQMRx8Mv544rwoz8Zw=" alt="" />
                            <h2>Nome prato</h2>
                            <p>Cozinha</p>
                            <p>descrição prato</p>
                        </div>
                        <div className="card-prato">
                            card 2
                        </div>
                        <div className="card-prato">
                            card 3
                        </div>
                        <div className="card-prato">
                            card 3
                        </div>
                        <div className="card-prato">
                            card 3
                        </div>
                    </div>
            </main>
        </>
    )
}

export default Home 