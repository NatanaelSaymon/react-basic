import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [dogImage, setDogImage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then((res) => res.json())
      .then((data) => setDogImage(data[0].url))
      setLoading(false)
  }, [])

  console.log(dogImage)

  return (
    <div className="App">
      <h1>useEffect React Hook</h1>
      {loading ? <p>loading...</p> : <img src={dogImage} alt="Dog" />}
    </div>
  )
}

export default App
