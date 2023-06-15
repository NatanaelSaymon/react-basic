import style from "./style.module.css";

export function Publication() {
  const publications = [
    {
      title: "JavaScript data type and structures 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      publicatedAt: "Há 1 dia",
    },
    {
      title: "JavaScript data type and structures 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      publicatedAt: "Há 1 dia",
    },
    {
      title: "JavaScript data type and structures 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      publicatedAt: "Há 1 dia",
    },
    {
      title: "JavaScript data type and structures 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      publicatedAt: "Há 1 dia",
    },
    {
      title: "JavaScript data type and structures 5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      publicatedAt: "Há 1 dia",
    },
  ];

  return (
    <section className={style.publicationContainer}>
      <div className={style.publicationHeader}>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteudo"
        className={style.publicationInput}
      />

      <div className={style.publicationCardContainer}>
        {publications.map((publication) => {
          return (
            <article className={style.publicationCard}>
              <div className={style.publicationCardTop}>
                <h2>{publication.title}</h2>
                <span>{publication.publicatedAt}</span>
              </div>

              <p>{publication.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
