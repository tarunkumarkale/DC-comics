import { createContext, useState } from "react";

export const ContextFirebase = createContext(null);

export const ProviderFirebase = ({ children }) => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    return (
        <ContextFirebase.Provider value={{ first, second, setFirst, setSecond }}>
            {children}
        </ContextFirebase.Provider>
    );
};
