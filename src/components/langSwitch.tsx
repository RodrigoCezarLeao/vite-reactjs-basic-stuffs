import pt from '../assets/pt.png'
import en from '../assets/en.png'
import { HUB_EVENTS, useHubx } from '../hooks/hub'

export const LangSwitch = () => {
    const { notify } = useHubx()
    
    return <div className='langSwitch'>
        <img src={pt} onClick={() => notify(HUB_EVENTS.CHANGE_LANGUAGE_APP_PT)}/>
        <img src={en} onClick={() => notify(HUB_EVENTS.CHANGE_LANGUAGE_APP_EN)}/>
    </div>
}