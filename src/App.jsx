import Header from './Components/Header'
import data from './data'

function App() {
  const travelData = data.map(item => item)

  return(
    <Header />
  )
}

export default App
