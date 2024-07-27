import { useEffect } from "react"
import useHub2 from "../hooks/hub2"
import { useObserverContext } from "../hooks/hub2Context"

export const Card2 = () => {

    const {subscribe} = useObserverContext()

    const func = () => {console.log('oi')}

    useEffect(() => {
        subscribe('teste', func)
    }, [])

    


    return <div>Card2</div>
}