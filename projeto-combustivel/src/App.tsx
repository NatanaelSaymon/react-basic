import { useState, FormEvent } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [alcooInput, setAlcoolInput] = useState(0);
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = alcooInput / gasolinaInput;

    if (calculo <= 0.7) {
      setInfo({
        title: "Compensa usar Álcool",
        gasolina: formatPrice(gasolinaInput),
        alcool: formatPrice(alcooInput),
      });
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatPrice(gasolinaInput),
        alcool: formatPrice(alcooInput),
      });
    }
  }

  function formatPrice(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <div>
      <main className="container">
        <img src={logoImg} alt="logo" />
        <h1 className="title">Qual a melhor opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label htmlFor="alcool">Alcool (preço por litro):</label>
          <input
            type="number"
            id="alcool"
            className="input"
            placeholder="4,90"
            min="1"
            step="0.01"
            value={alcooInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
            required
          />

          <label htmlFor="gasolina">Gasolina (preço por litro):</label>
          <input
            type="number"
            id="gasolina"
            className="input"
            placeholder="4,90"
            min="1"
            step="0.01"
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
            required
          />

          <input type="submit" className="button" value="Calcular" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>
            <span>Álcool: {info.alcool}</span>
            <span>Gasolina: {info.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
