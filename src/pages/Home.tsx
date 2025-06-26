import "../assets/styles/home.css"
const image = "./terra_das_aguas.jpg"

const Home = () => {
    return(
        <>
        <main className="main-home">
        <div>
            <img src={image} alt="sem imagem" />
        </div>
        <div>
            <div className="container-cards"> 
                <div className="card-prato">
                    card 1
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