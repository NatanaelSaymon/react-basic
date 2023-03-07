import '../css/style.scss'
import cardTemplate from './cardTemplate';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = '302f4c804ba1620ae1281c6dd6314a7c';

const app = document.querySelector('#app');

const getPopularMovies = async () => {
  const response = await fetch(`${baseURL}/movie/popular?api_key=${apiKey}&language=pt-BR&region=BR&page=1`)

  const data = await response.json()

  data.results.map(filme => {
    const template = cardTemplate(
      filme.poster_path,
      filme.title,
      filme.release_date,
      filme.vote_average
    )

    app.innerHTML += template
  })
}

getPopularMovies()


