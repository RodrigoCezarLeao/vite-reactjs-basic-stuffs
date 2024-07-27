import './App.css'
import { HubProvider } from './hooks/hub'
import { Main } from './components/Main'
import { Card2 } from './components2/card2'
import { Button2 } from './components2/button2'
import { ObserverProvider } from './hooks/hub2'


function App() {
  return (
    <ObserverProvider>
      <Card2 />
      <Button2 />
    </ObserverProvider>
  )
}

export default App
