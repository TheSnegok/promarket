import { createContext, FC, useContext, useState } from "react";

interface IContext {
    likes: number;
    basket: number;
    setLikes: (c: number) => void;
}

const Context = createContext<IContext>({
    likes: 0,
    basket: 0,
    setLikes: () => {},
});

export const useGlobalContext = () => useContext(Context);

export const Provider: FC = ({ children }) => {

    const [likes, setLikes] = useState<number>(0);

    return (
        <Context.Provider value={{likes, basket: 0, setLikes}} >
            {children}
        </Context.Provider>
    )
}