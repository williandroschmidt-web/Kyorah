import "./Login.css";

import { Link } from "react-router-dom";
import { FiArrowRight, FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  return (
    <main className="login-page">

      <div className="login-background"></div>

      <div className="login-card">

        <img
          src="/favicon.png"
          alt="Kyorah"
          className="login-logo"
        />

        <h1>Bem-vindo de volta</h1>

        <p>
          Entre na sua conta para continuar utilizando a Kyorah.
        </p>

        <form className="login-form">

          <div className="input-group">

            <FiMail />

            <input
              type="email"
              placeholder="E-mail"
              id="email"
              name="email"
            />

          </div>

          <div className="input-group">

            <FiLock />

            <input
              type="password"
              placeholder="Senha"
              id="password"
              name="password"
            />

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Entrar
            <FiArrowRight />
          </button>

        </form>

        <div className="login-links">

          <Link to="/register">
            Criar uma conta
          </Link>

          <Link to="/">
            Voltar
          </Link>

        </div>

      </div>

    </main>
  );
}