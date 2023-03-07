export default function cardTemplate(imagePath, title, releaseDate, voteAverage) {
    const imageURL = 'https://image.tmdb.org/t/p/w780';
    const releaseDateFormatted = new Date(releaseDate).toLocaleDateString()
    
    return`
      <div class="card">
        <img src="${imageURL}${imagePath}" classs="card__img">
        <div class="card__description">
          <h2 class="card__title">${title}</h2>
          <p class="card__release-date">Data: ${releaseDateFormatted}</p>
          <p class="card__vote-average">Pontuação: ${voteAverage}</p>
        </div>
      </div>
    `
}