import { ArrowSquareOut } from "@phosphor-icons/react";
import style from "./style.module.css";

export function Profile() {
  return (
    <section className={style.profile}>
      <img
        src="https://github.com/natanaelsaymon.png"
        alt="Natanael Saymon"
        className={style.profileImage}
      />
      <div className={style.profileContent}>
        <h1>Natanael Saymon</h1>
        <p>
          Sabe aquelas pessoas que gostam de games, animes, mangá, filmes de
          herói? Pois é, eu sou uma dessas pessoas hahaha... Sou dev front-end
          em formação, apaixonado por ciência, universo e tecnologia 👨‍🚀.
          Entusiasta de JavaScript, React, TypeScript. Me dedico e estudo
          diariamente com muito foco e empenho.
        </p>
      </div>
      <a href="https://github.com/NatanaelSaymon" target="_blank">
        github
        <ArrowSquareOut size={20} color="#3294f8" weight="fill" />
      </a>
    </section>
  );
}
