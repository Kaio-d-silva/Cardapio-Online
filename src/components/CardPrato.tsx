
interface CardPratoProps {
    nome: string,
    cozinha: string,
    descricao_resumida: string,
    valor: number,

}


const CardPratoComponent = ({ nome, cozinha, descricao_resumida, valor }: CardPratoProps) => {
    return (
        <div className="card-prato">
            <img className="image-card" src={""} alt="" />
            <h2>{nome}</h2>
            <p>{cozinha}</p>
            <p>{descricao_resumida}</p>
            <p>R$ {valor}</p>
        </div>
    )
}

export default CardPratoComponent