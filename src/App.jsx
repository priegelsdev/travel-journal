import Header from './Components/Header'
import Card from './Components/Card'
import data from './data'

function App() {
  // create array of html/jsx elements to be rendered onto display
  const travelData = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  
  // will display following Components/elements on screen
  return(
    <>
      <Header />
      {travelData}
    </>
  )
}

export default App
