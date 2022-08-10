import { useState } from 'react';

export const CountContext = React.createContext();

export const CountProvider = ({children}) => {

    const [count, setCount] = useState(0);
    const inc = () => setCount((c) => c + 1);
    const dec = () => setCount((c) => c - 1);

    return(
        <CountContext.Provider value={{ count, inc, dec }}>
            {children}
        </CountContext.Provider>
    );
}