import { createContext, useContext, useState } from "react"

export interface EventHub {
    event_id: string
    source: string
    callback_function: Function
}

const HubContext = createContext<any>(null);

export const HubProvider = ({ children }: { children: React.ReactNode }) => {
    const [events, setEvents] = useState<EventHub[]>([])

    const subscribe = (event_id: string, source: string, f: Function) => {
        if (!events.find(item => item.event_id === event_id && item.source === source)){
            setEvents((prevEvents) => {
                if (!prevEvents.find((item) => item.event_id === event_id  && item.source === source   )) {
                    return [...prevEvents, { event_id, source, callback_function: f }];
                }
                return prevEvents;
            });
        }
    }

    const notify = (event_id: string, args: any) => {
        const routinesToExecute = events.filter((item) => item.event_id === event_id)
        for (let routine of routinesToExecute) {
            routine.callback_function(args);
        }
    }

    return (
        <HubContext.Provider value={{ subscribe, notify }}>
            {children}
        </HubContext.Provider>
    );
}


export const useHub = () => {
    return useContext(HubContext);
};