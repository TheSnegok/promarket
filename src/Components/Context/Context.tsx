import { createContext, FC, useContext, useState } from "react";

interface ILikes {
    count: number;
}

interface IContext {
    likes: ILikes;
    basket: number;
    setLikes: (c: ILikes) => void;
    setBasket: (c: number) => void;
}

export const Context = createContext<IContext>({ likes: { count: 0 }, basket: 0, setLikes: () => { }, setBasket: () => { } });

export const useGlobalContext = () => useContext(Context);

export const Provider: FC = ({ children }) => {

    const [likes, setLikes] = useState<ILikes>({
        count: 0,
    });
    const [basket, setBasket] = useState<number>(0);

    return (
        <Context.Provider value={{ likes, basket, setLikes, setBasket }} >
            {children}
        </Context.Provider>
    )
}