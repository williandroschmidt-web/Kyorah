import "./Home.css";

export default function Home() {

  const hour = new Date().getHours();

  let greeting = "Boa noite";

  if (hour >= 5 && hour < 12) greeting = "Bom dia";
  if (hour >= 12 && hour < 18) greeting = "Boa tarde";

  return (

    <section className="home fade-in">

      <div className="home-glow"></div>

      <img
        src="/favicon.png"
        alt="Kyorah"
        className="home-logo float"
      />

      <span className="home-greeting">

        {greeting}

      </span>

      <h1>

        Por onde

        <br />

        <span className="gradient-text">

          começamos?

        </span>

      </h1>

      <p>

        Aprendendo com você.
        Evoluindo com você.

      </p>

    </section>

  );

}