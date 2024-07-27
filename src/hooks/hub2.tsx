import { useState } from "react"

export interface EventHub {
    event_id: string
    callback_function: Function
}

export interface Hub2 {
    subscribe: (event: string, callback: Function) => void;
    notify: (event: string) => void;
}

const useHub2 = () => {
    const [events, setEvents] = useState<EventHub[]>([])
    console.log("🚀 ~ useHub2 ~ events:", events)

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

    return {subscribe, notify}
}

export default useHub2