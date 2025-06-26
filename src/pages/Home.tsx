import "../assets/styles/home.css"
const image = "./terra_das_aguas.jpg"

const Home = () => {
    return (
        <>
            <main className="main-home">
                <div >
                    <img className="image-backgroud" src={image} alt="sem imagem" />
                </div>
                <div>
                    <div className="container-cards">
                        <div className="card-prato">
                            <img src={image} alt="" />
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
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home 