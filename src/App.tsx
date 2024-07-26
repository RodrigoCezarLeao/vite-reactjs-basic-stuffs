import './App.css'
import { HubProvider } from './hooks/hub'
import { Main } from './components/Main'

function App() {
  return (
    <HubProvider>
      <Main />
    </HubProvider>
  )
}

export default App
