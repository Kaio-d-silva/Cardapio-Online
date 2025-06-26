interface CardPratoProps {
    imagem: string;
    nome: string;
    cozinha: string;
    descricao: string;
}

const CardPratoComponent = ({ imagem, nome, cozinha, descricao }: CardPratoProps) => {
    
    return(
        <>
        <div className="prato-card">
          <div className="botao-opcoes">
            <button>...</button>
            <div className="container-menu-opcoes">
              <div className="menu-opcoes">
                <button className="opcao">Editar</button>
                <button className="opcao">Deletar</button>
                <button className="opcao">Detalhes</button>
              </div>
            </div>
          </div>
          <img
            src={imagem}
            alt="imagem prato"
          />
          <h2 className="nome-prato">{nome}</h2>
          <p className="cozinha-prato">{cozinha}</p>
          <p className="descricao-curta-prato">{descricao}</p>
          <a href="#" className="btn">
          </a>
          {/* <Link to="/prato/1" className="btn">Ver detalhes</Link> */}
        </div></>
    )
}

export default CardPratoComponent