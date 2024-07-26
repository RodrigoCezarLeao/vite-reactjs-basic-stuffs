import { useHub } from "../../hooks/hub";
import { CHANGE_LANGUAGE_APP } from "../../events";

export const ButtonChangeLanguage = () => {
    const { notify } = useHub();

    const changeLanguage = (lang: string) => {
        notify(CHANGE_LANGUAGE_APP, lang)
    }

    return <div>
        <button onClick={() => {changeLanguage('pt')}}>PT-BR</button>
        <button onClick={() => {changeLanguage('en')}}>EN-US</button>
    </div>
}