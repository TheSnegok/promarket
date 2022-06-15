import { createContext, FC, useContext, useState } from "react";
import { articleList, hitsMenu, hitsSlideItems, stockMenu, stockSlideItems, regions, MenuListItems, MenuInfoItems, MenuInfoItemsSecond, MenuInfoItemsThird } from '../../api/api';

interface IMenuListItems {
	src: string;
	description: string;
	text: string;
};

interface IMenuInfoItems {
	text: string;
	url: string;
};

interface IMenu {
	MenuListItems: IMenuListItems[];
	MenuInfoItems: IMenuInfoItems[][];
	MenuInfoItemsSecond: IMenuInfoItems[];
	MenuInfoItemsThird: IMenuInfoItems[];
}

interface IData {
	hits: IHits;
	stock: IStock;
	articleList: string[][];
	regionsList: string[];
	menu: IMenu;
}

export interface ILikesItems {
	url: string;
	imgUrl: string;
	type: string[];
	stars: string[];
	review: number;
	price: number[];
	description: string;
	country: string;
	personalKey: string;
}

export interface ILikes {
	count: number;
	items: ILikesItems[] | [];
}

export interface IDataTemplate {
	tags: string[];
	imgSrc: string;
	stars: string[];
	reviews: number;
	description: string;
	country: string;
	price: number[];
	personalKey: string;
}

interface IHits {
	menu: string[] | null;
	slideItems: IDataTemplate[] | null;
};

interface IStock {
	menu: string[] | null;
	slideItems: IDataTemplate[] | null;
};

export interface IArticle {
	articleHeader: string;
	articleText: string;
};

interface IContext {
	data: IData;
	likes: ILikes;
	basket: ILikes;
	product: ILikesItems | null;
	article: IArticle | null;
	profile: {
		avatar: string | null;
		name: null;
		surname: null;
		email: null;
		password: null;
	} | null;
	authData: {
		authorization: boolean;
		email: null | number;
		password: null | number;
		key: null | string;
	} | null;
	setProduct: (c: ILikesItems) => void;
	setArticle: (c: IArticle) => void;
	setLikes: (c: ILikes) => void;
	setBasket: (c: ILikes) => void;
	contextFindItem: (itemName: string, wantedKey: string) => boolean | void,
	contextRemoveItem: (itemName: string, wantedKey: string) => void,
	contextPushItem: (itemName: string, content: ILikesItems) => void,
};

export const Context = createContext<IContext>({
	data: {
		hits: {
			menu: null,
			slideItems: null
		},
		stock: {
			menu: null,
			slideItems: null
		},
		articleList,
		regionsList: regions,
		menu: {
			MenuListItems,
			MenuInfoItems,
			MenuInfoItemsSecond,
			MenuInfoItemsThird
		}
	},
	likes: {
		count: 0,
		items: []
	},
	basket: {
		count: 0,
		items: []
	},
	product: null,
	article: null,
	profile: null,
	authData: null,
	setProduct: () => { },
	setArticle: () => { },
	setLikes: () => { },
	setBasket: () => { },
	contextFindItem: () => { },
	contextRemoveItem: () => { },
	contextPushItem: () => { }
});

/* 
Plans for tomorrow: search page, authorization, responsible design,
*/
export const useGlobalContext = () => useContext(Context);

export const Provider: FC = ({ children }) => {

	const data = {
		hits: {
			menu: hitsMenu,
			slideItems: hitsSlideItems,
		},
		stock: {
			menu: stockMenu,
			slideItems: stockSlideItems
		},
		articleList,
		regionsList: regions,
		menu: {
			MenuListItems,
			MenuInfoItems,
			MenuInfoItemsSecond,
			MenuInfoItemsThird
		}
	}
	const profile = null;

	const authData = null;

	const [product, setProduct] = useState<ILikesItems | null>(null);

	const [article, setArticle] = useState<IArticle | null>(null);

	const [likes, setLikes] = useState<ILikes>({
		count: 0,
		items: []
	});

	const [basket, setBasket] = useState<ILikes>({
		count: 0,
		items: []
	});

	const contextFindItem = (itemName: string, wantedKey: string) => {
		if (itemName === 'likes') {
			return likes.items.find(item => item.personalKey === wantedKey) === undefined;
		} else if (itemName === 'basket') {
			return basket.items.find(item => item.personalKey === wantedKey) === undefined;
		}
	}

	const contextRemoveItem = (itemName: string, wantedKey: string) => {
		if (itemName === 'likes') {
			setLikes({
				count: likes.count === 0 ? 0 : likes.count - 1,
				items: likes.count === 0 ? [] : likes.items.filter(item => item.personalKey !== wantedKey)
			});
		} else if (itemName === 'basket') {
			setBasket({
				count: basket.count === 0 ? 0 : basket.count - 1,
				items: basket.count === 0 ? [] : basket.items.filter(item => item.personalKey !== wantedKey)
			});
		}
	};

	const contextPushItem = (itemName: string, content: ILikesItems) => {
		if (itemName === 'likes') {
			setLikes({
				count: likes.count + 1,
				items: [
					...likes.items,
					content
				]
			});
		} else if (itemName === 'basket') {
			setBasket({
				count: basket.count + 1,
				items: [
					...basket.items,
					content
				]
			});
		}
	};

	return (
		<Context.Provider value={{ data, likes, basket, profile, authData, product, setProduct, article, setArticle, setLikes, setBasket, contextFindItem, contextRemoveItem, contextPushItem }} >
			{children}
		</Context.Provider>
	)
}