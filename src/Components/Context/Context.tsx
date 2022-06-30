import { createContext, FC, useContext, useState } from "react";
import { articleList, hitsMenu, hitsSlideItems, stockMenu, stockSlideItems, regions, MenuListItems, MenuInfoItems, MenuInfoItemsSecond, MenuInfoItemsThird, footerSectionList, footerMenu } from '../../api/api';

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
	footer: {
		footerSectionList: string[][];
		footerMenu: string[][];
	};
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

export interface IProfile {
	avatar: string | null;
	name: null;
	surname: null;
	email: null;
	password: null;
}

export interface IModal {
	visible: boolean;
	item: ILikesItems | null;
}

export interface IAuthData {
	authorization: boolean;
	email: string;
	password: string;
	key: string;
}

export interface ICallInput {
	phone: string;
	name: string;
}

interface IContext {
	data: IData;
	likes: ILikes;
	basket: ILikes;
	product: ILikesItems | null;
	article: IArticle | null;
	profile: IProfile | null;
	modal: IModal;
	callInput: ICallInput;
	setCallInput: (c: ICallInput) => void;
	authentication: IAuthData;
	setAuthentication: (c: IAuthData) => void;
	region: string;
	setRegion: (c: string) => void;
	setModal: (c: IModal) => void;
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
		},
		footer: {
			footerSectionList,
			footerMenu
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
	modal: {
		visible: false,
		item: null
	},
	callInput: {
		phone: '',
		name: ''
	},
	setCallInput: () => { },
	authentication: {
		authorization: false, //we may get from cookies or session
		email: '', // there for inputs * 2 
		password: '',
		key: ''
	},
	setAuthentication: () => { },
	region: 'Київ',
	setRegion: () => { },
	setModal: () => { },
	setProduct: () => { },
	setArticle: () => { },
	setLikes: () => { },
	setBasket: () => { },
	contextFindItem: () => { },
	contextRemoveItem: () => { },
	contextPushItem: () => { }
});

/* 
Plans for tomorrow: search page, responsible design,
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
		},
		footer: {
			footerSectionList,
			footerMenu
		}
	}
	const profile = null;

	const [modal, setModal] = useState<IModal>({
		visible: false,
		item: null
	});

	const [callInput, setCallInput] = useState<ICallInput>({ name: '', phone: '' });

	const [authentication, setAuthentication] = useState<IAuthData>({
		authorization: false, //we may get from cookies or session
		email: '', // there for inputs * 2 
		password: '',
		key: ''
	});

	const [region, setRegion] = useState<string>('Київ');

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
		<Context.Provider value={{ data, likes, basket, profile, modal, setModal, authentication, setAuthentication, callInput, setCallInput, region, setRegion, product, setProduct, article, setArticle, setLikes, setBasket, contextFindItem, contextRemoveItem, contextPushItem }} >
			{children}
		</Context.Provider>
	)
}