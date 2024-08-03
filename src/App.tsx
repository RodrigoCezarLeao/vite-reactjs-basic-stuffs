import './App.css'
import { Card } from './components/card'
import { Button } from './components/button'
import { ObserverProvider } from './hooks/hub'
import { LangSwitch } from './components/langSwitch'


function App() {
  return (
    <ObserverProvider>
      <LangSwitch />
      <Card />
      <Button />
    </ObserverProvider>
  )
}

export default App
