import './App.css'
import { LostItemsProvider } from './context/ItemContext'
import Landing from './Landingpage/LandingRaute'

function App() {

  return (
    <LostItemsProvider>
      <Landing/>
    </LostItemsProvider>
  )
}

export default App
