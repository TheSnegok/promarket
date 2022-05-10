import { createContext, FC, useContext, useState } from "react";

interface IContext {
    likes: number;
    basket: number;
    setLikes: (c: number) => void;
    setBasket: (c: number) => void;
}

export const Context = createContext<IContext>({likes: 0, basket: 0, setLikes: () => {}, setBasket: () => {}});

export const useGlobalContext = () => useContext(Context);

export const Provider: FC = ({ children }) => {

    const [likes, setLikes] = useState<number>(0);
    const [basket, setBasket] = useState<number>(0);

    return (
        <Context.Provider value={{likes, basket, setLikes, setBasket}} >
            {children}
        </Context.Provider>
    )
}