interface CardPratoProps {
    imagem: string,
    nome: string,
    cozinha: string,
    descricao: string,

}


const CardPratoComponent = ({ imagem, nome, cozinha, descricao }: CardPratoProps) => {
    return (
        <div className="card-prato">
            <img className="image-card" src={imagem} alt="" />
            <h2>{nome}</h2>
            <p>{cozinha}</p>
            <p>{descricao}</p>
        </div>
    )
}

export default CardPratoComponent