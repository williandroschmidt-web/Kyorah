import "./Landing.css";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiMessageCircle,
  FiCpu,
  FiFileText,
  FiMic,
} from "react-icons/fi";

export default function Landing() {
  return (
    <main className="landing">

      <div className="landing-background"></div>

      <header className="landing-header">

        <div className="brand">

          <img
            src="/favicon.png"
            alt="Kyorah"
          />

          <span>Kyorah</span>

        </div>

        <div className="header-buttons">

          <Link to="/login" className="btn-secondary">
            Entrar
          </Link>

          <Link to="/register" className="btn-primary">
            Criar conta
          </Link>

        </div>

      </header>

      <section className="hero">

        <div className="hero-badge">
          Desenvolvida pela MediaLab
        </div>

        <h1>
          Conheça a
          <span> Kyorah</span>
        </h1>

        <p>
          Converse, aprenda, crie ideias,
          desenvolva projetos e resolva
          problemas com uma Inteligência
          Artificial criada para ajudar você.
        </p>

        <div className="hero-buttons">

          <Link to="/register" className="btn-primary large">
            Começar agora
            <FiArrowRight />
          </Link>

          <Link to="/login" className="btn-secondary large">
            Já tenho uma conta
          </Link>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">

          <FiMessageCircle />

          <h3>Conversas Inteligentes</h3>

          <p>
            Respostas naturais, organizadas
            e fáceis de entender.
          </p>

        </div>

        <div className="feature-card">

          <FiCpu />

          <h3>Memória</h3>

          <p>
            A Kyorah lembrará informações
            importantes para ajudar melhor.
          </p>

        </div>

        <div className="feature-card">

          <FiFileText />

          <h3>Arquivos</h3>

          <p>
            Analise PDFs, documentos,
            apresentações e muito mais.
          </p>

        </div>

        <div className="feature-card">

          <FiMic />

          <h3>Voz</h3>

          <p>
            Converse naturalmente utilizando
            comandos por voz.
          </p>

        </div>

      </section>

      <footer>

        <h2>Kyorah</h2>

        <p>
          Um produto da divisão OMNIA,
          desenvolvido pela MediaLab.
        </p>

      </footer>

    </main>
  );
}