import { useEffect, useState } from 'react'
import { SearchInput } from './components/SearchInput'
import './index.css'

function App() {

  const [text, setText] = useState('')
  const [info, setInfo] = useState({})

  const api = 'https://kitsu.io/api/edge'

  useEffect(() => {

    if(text) {
      setInfo({})
      async function getAnimes() {
        try {
          const response = await fetch(`${api}/anime?filter[text]=${text}&page[limit]=12`)
          const data = await response.json()
  
          setInfo(data)
          console.log(data)
        } 
        catch(error) {
          console.log('Houve um erro')
        }
      }

      console.log(info)
  
      getAnimes()
    }


  }, [text])

  return (
    <div className="App">
      <h1>animes</h1>

      <SearchInput value={text} onChange={(string) => setText(string)}/>

      {text && !info.data && (
        <span>Carregando....</span>
      )}

      {info.data && (
        <div className="container">
          <div className="wrapper">
            
              <ul className="list">
                {info.data.map((anime) => (
                  <li key={anime.id}>
                    <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                    <p>{anime.attributes.canonicalTitle}</p>
                  </li>
                ))}
              </ul>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default App
