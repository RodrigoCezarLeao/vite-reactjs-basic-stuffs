import { createContext, useContext, useState } from "react"

export interface EventHub {
    event_id: string
    callback_function: Function
}

export interface Hub2 {
    subscribe: (event: string, callback: Function) => void;
    notify: (event: string) => void;
    lang: string;
    setLang: (value: string) => void;
}

const ObserverContext = createContext<Hub2 | null>(null);

export const useHub2 = () => {
    const [events, setEvents] = useState<EventHub[]>([])
    const [lang, setLang] = useState<string>('pt')

    const subscribe = (event: string, callback: Function) => {
        setEvents((prevEvents) => {
            if (!prevEvents.find(evt => evt.event_id === event && evt.callback_function === callback))
                return [...prevEvents, {event_id: event, callback_function: callback}]

            return prevEvents
        })
    }

    const notify = (event: string) => {
        const filteredEvents = events.filter(evt => evt.event_id === event)
        for (const evt of filteredEvents) {
            evt.callback_function()
        }
    }

    return {subscribe, notify, lang, setLang}
}

export const ObserverProvider = ({ children }: { children: React.ReactNode }) => {
    const observer = useHub2();
    return (
        <ObserverContext.Provider value={observer}>
            {children}
        </ObserverContext.Provider>
    );
};

export const useHubx = () => {
    const context = useContext(ObserverContext);
    if (!context) {
        throw new Error('useObserverContext must be used within a ObserverProvider');
    }
    return context;
};
