import React, { createContext, useContext } from 'react';
import { Hub2, useHub2 } from './hub2';

const ObserverContext = createContext<Hub2 | null>(null);

export const ObserverProvider = ({ children }: { children: React.ReactNode }) => {
    const observer = useHub2();
    return (
        <ObserverContext.Provider value={observer}>
            {children}
        </ObserverContext.Provider>
    );
};

export const useObserverContext = () => {
    const context = useContext(ObserverContext);
    if (!context) {
        throw new Error('useObserverContext must be used within a ObserverProvider');
    }
    return context;
};
