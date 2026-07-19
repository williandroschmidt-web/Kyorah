import "./Register.css";

import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiUser,
  FiMail,
  FiLock,
} from "react-icons/fi";

export default function Register() {
  return (
    <main className="register-page">

      <div className="register-background"></div>

      <div className="register-card">

        <img
          src="/favicon.png"
          alt="Kyorah"
          className="register-logo"
        />

        <h1>Criar conta</h1>

        <p>
          Crie sua conta e comece a conversar com a Kyorah.
        </p>

        <form className="register-form">

          <div className="input-group">

            <FiUser />

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome completo"
            />

          </div>

          <div className="input-group">

            <FiMail />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />

          </div>

          <div className="input-group">

            <FiLock />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
            />

          </div>

          <div className="input-group">

            <FiLock />

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar senha"
            />

          </div>

          <button
            type="submit"
            className="register-button"
          >
            Criar conta
            <FiArrowRight />
          </button>

        </form>

        <div className="register-links">

          <Link to="/login">
            Já tenho uma conta
          </Link>

          <Link to="/">
            Voltar
          </Link>

        </div>

      </div>

    </main>
  );
}