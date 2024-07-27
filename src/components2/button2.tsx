import useHub2 from "../hooks/hub2"
import { useObserverContext } from "../hooks/hub2Context"

export const Button2 = () => {
    const { notify } = useObserverContext()
    
    return <button onClick={() => {
        notify('teste')
    }}>Clicar</button>
}