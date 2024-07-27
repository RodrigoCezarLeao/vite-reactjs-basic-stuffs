import { useHubx } from "../hooks/hub2"

export const Button2 = () => {
    const { notify, setLang } = useHubx()
    
    return <button onClick={() => {
        setLang('en')
        notify('teste')
    }}>Clicar</button>
}