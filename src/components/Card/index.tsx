import { useEffect, useRef, useState } from "react"
import { useHub } from "../../hooks/hub";
import { INCREMENT_COUNTER } from "../../events";
import { useLang } from "../../hooks/useLang";
import { intl } from "../../language";

export const Card = () => {
    const [ contador, setContador ] = useState(0)
    const contadorRef = useRef(contador);

    const { subscribe } = useHub();
    const { lang } = useLang('Card');

    useEffect(() => {
        contadorRef.current = contador;
    }, [contador]);
    
    
    useEffect(() => {
        subscribe(INCREMENT_COUNTER, 'contador_card', (param: number) => {
            return setContador((contador) => contador + param)
        })
        subscribe(INCREMENT_COUNTER, 'console_card', () => {console.log(`Evento disparado pela segunda vez ${contadorRef.current + 1}`)})
    }, [])


    return <div>
        <span>{intl['card_counter'][lang]}</span>
        {contador}
    </div>
}