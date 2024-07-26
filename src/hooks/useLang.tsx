import { useEffect, useState } from "react";
import { useHub } from "./hub";
import { CHANGE_LANGUAGE_APP } from "../events";

export const useLang = (component_name: string) => {
    const [lang, setLang] = useState(sessionStorage.getItem('lang') ?? 'pt')
    const { subscribe } = useHub();

    useEffect(() => {
        subscribe(CHANGE_LANGUAGE_APP, 'change_hook_lang_' + component_name, (newLang: string) => {
            sessionStorage.setItem('lang', newLang)
            setLang(newLang)
        })
    },[])

    return {lang} 
}