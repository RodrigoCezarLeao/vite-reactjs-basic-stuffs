import { useEffect, useRef } from "react"
import { useHubx } from "../hooks/hub2"

export const Card2 = () => {

    const {subscribe, lang} = useHubx()
    const langRef = useRef(lang)
    langRef.current = lang
    

    const func = () => {console.log(langRef.current === 'pt' ? 'oi' : 'hi')}

    useEffect(() => {
        subscribe('teste', func)
    }, [])


    return <div>{lang === 'pt' ? 'PORTUGUÊS' : 'INGLÊS'}</div>
}