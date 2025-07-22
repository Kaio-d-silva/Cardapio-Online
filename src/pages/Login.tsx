import "../assets/styles/login.css";

const Login = () => {
  return (
    <>
      <div className="container-login">
        <div className="login">
          <div className="login-img">
            <img
              src="https://img.freepik.com/vetores-premium/colecao-de-ilustracao-de-comida-desenhada-de-mao_699403-8.jpg?w=1380"
              alt="imagem login"
            />
          </div>
          <div className="login-form">
            <h2>LOGIN</h2>
            <input id="email" type="text" placeholder="E-mail do usuário" />
            <input id="senha" type="text" placeholder="Senha" />
            <button className="login-btn">Logar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
