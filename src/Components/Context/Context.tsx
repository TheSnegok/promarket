import { createContext, FC, useContext, useState } from "react";

interface IItemProps {
	count: number;
	items: {
		url: string;
		imgUrl: string;
		type: string[];
		stars: string[];
		review: number;
		price: number[];
		description: string;
		country: string;
	}[] | [];
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
		items: []
	}, basket: {
		count: 0,
		items: []
	}, setLikes: () => { }, setBasket: () => { }
});

export const useGlobalContext = () => useContext(Context);

export const Provider: FC = ({ children }) => {

	const [likes, setLikes] = useState<IItemProps>({
		count: 0,
		items: []
	});

	const [basket, setBasket] = useState<IItemProps>({
		count: 0,
		items: []
	});

	return (
		<Context.Provider value={{ likes, basket, setLikes, setBasket }} >
			{children}
		</Context.Provider>
	)
}