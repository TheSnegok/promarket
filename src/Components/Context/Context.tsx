import { createContext, FC, useContext, useState } from "react";

interface IItemProps {
    count: number;
    items: {
        url: string;
        imgUrl: string;
        type: string;
        stars: string[];
        review: string[];
        price: number;
    }
}

interface IContext {
    likes: IItemProps;
    basket: IItemProps;
    setLikes: (c: IItemProps) => void;
    setBasket: (c: IItemProps) => void;
}

export const Context = createContext<IContext>({
    likes: {
        count: 0,
        items: {
            url: '',
            imgUrl: '',
            type: '',
            stars: [],
            review: [],
            price: 0,
        }
    }, basket: {
        count: 0,
        items: {
            url: '',
            imgUrl: '',
            type: '',
            stars: [],
            review: [],
            price: 0,
        }
    }, setLikes: () => { }, setBasket: () => { }
});

export const useGlobalContext = () => useContext(Context);

export const Provider: FC = ({ children }) => {

    const [likes, setLikes] = useState<IItemProps>({
        count: 0,
        items: {
            url: '',
            imgUrl: '',
            type: '',
            stars: [],
            review: [],
            price: 0,
        }
    });
    const [basket, setBasket] = useState<IItemProps>({
        count: 0,
        items: {
            url: '',
            imgUrl: '',
            type: '',
            stars: [],
            review: [],
            price: 0,
        }
    });

    return (
        <Context.Provider value={{ likes, basket, setLikes, setBasket }} >
            {children}
        </Context.Provider>
    )
}