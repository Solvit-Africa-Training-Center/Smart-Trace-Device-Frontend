import './App.css'
import { LostItemsProvider } from './context/ItemContext'
import Landing from './Landingpage/Landing'

function App() {

  return (
    <LostItemsProvider>
      <Landing/>
    </LostItemsProvider>
  )
}

export default App
