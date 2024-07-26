import { INCREMENT_COUNTER } from "../../events";
import { useHub } from "../../hooks/hub"
import { intl } from "../../language";
import { useLang } from "../../hooks/useLang";

export const Button = () => {
    const { notify } = useHub();
    const { lang } = useLang('Button');

    return <button onClick={() => notify(INCREMENT_COUNTER, 10)}>{intl['button_title'][lang]}</button>
}