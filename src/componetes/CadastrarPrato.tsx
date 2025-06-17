import "../estilos/CadastroPrato.css"

const CadastrarPrato = () => {
    return(
        <>
        <main className="Main-Cadastro">
            <div className="Container-cadastro">
                
                    <h1>Cadastro de prato</h1>
                <div className="Container-inputs">
                    <div className="Inputs">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Ex: Feijoada"/>
        
                        <label htmlFor="cozinha">Cozinha</label>
                        <input type="text" id="cozinha" placeholder="Ex: Brasileira"/>
        
                        <label htmlFor="descricao-resumida">Descrição Resumida</label>
                        <input type="text" id="descricao-resumida" placeholder="Ex: Prato típico brasileiro"/>
        
                        <label htmlFor="descricao-detalhada">Descrição Detalhada</label>
                        <input type="text" id="descricao-detalhada" placeholder="Ex: Feijoada é um prato tradicional da culinária brasileira, preparado com feijão preto, carne de porco, linguiça, e acompanhado de arroz, farofa, couve refogada e laranja."/>
                    </div>
                </div>
                    <div className="Layout-botao">
                    <button className="Button-cadastro">Cadastrar</button>
                </div>

            </div>
        
        </main>
        </>
    )
}

export default CadastrarPrato;
