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

export interface ILikes {
	count: number;
	items: IDataTemplate[] | [];
}

export interface IDataTemplate {
	url: string;
	tags: string[];
	imgSrc: string;
	stars: number[];
	reviews: number;
	description: string;
	country: string;
	price: number[];
	personalKey: string;
}

interface IHits {
	menu: string[];
	slideItems: IDataTemplate[];
};

interface IStock {
	menu: string[];
	slideItems: IDataTemplate[];
};

export interface IArticle {
	articleHeader: string;
	articleText: string;
};

export interface IProfile {
	avatar: string | null;
	name: string;
	surname: string;
	phone: string;
	email: string;
	password: string;
}

export interface IModal {
	visible: boolean;
	item: IDataTemplate | null;
}

export interface IAuthData {
	authorization: boolean;
	email: string;
	password: string;
	key: string;
	rememberMe: boolean;
}

export interface ICallInput {
	phone: string;
	name: string;
}

export interface ISearch {
	text: string,
	matchFound: [] | IDataTemplate[],
	minPrice: number,
	maxPrice: number,
	minYear: number,
	maxYear: number,
	sort: number,
}

interface IContext {
	data: IData;
	likes: ILikes;
	basket: ILikes;
	product: IDataTemplate | null;
	article: IArticle | null;
	profile: IProfile;
	setProfile: (c: IProfile) => void;
	modal: IModal;
	callInput: ICallInput;
	setCallInput: (c: ICallInput) => void;
	authentication: IAuthData;
	setAuthentication: (c: IAuthData) => void;
	findInput: ISearch;
	setFindInput: (c: ISearch) => void;
	region: string;
	setRegion: (c: string) => void;
	setModal: (c: IModal) => void;
	setProduct: (c: IDataTemplate) => void;
	setArticle: (c: IArticle) => void;
	setLikes: (c: ILikes) => void;
	setBasket: (c: ILikes) => void;
	contextFindItem: (itemName: string, wantedKey: string) => boolean | void,
	contextRemoveItem: (itemName: string, wantedKey: string) => void,
	contextPushItem: (itemName: string, content: IDataTemplate) => void,
};

export const Context = createContext<IContext>({
	data: {
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
	profile: {
		avatar: null,
		name: 'admin',
		surname: '',
		phone: '',
		email: '',
		password: ''
	},
	setProfile: () => { },
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
		key: '',
		rememberMe: false
	},
	findInput: {
		text: '',
		matchFound: [],
		minPrice: 0,
		maxPrice: 0,
		minYear: 0,
		maxYear: 0,
		sort: 1
	},
	setFindInput: () => { },
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

	const [profile, setProfile] = useState<IProfile>({
		avatar: null,
		name: 'admin',
		surname: '',
		phone: '',
		email: '',
		password: ''
	});

	const [modal, setModal] = useState<IModal>({
		visible: false,
		item: null
	});

	const [callInput, setCallInput] = useState<ICallInput>({ name: '', phone: '' });

	const [findInput, setFindInput] = useState<ISearch>({
		text: '',
		matchFound: [],
		minPrice: 0,
		maxPrice: 50000,
		minYear: new Date().getFullYear() - 30,
		maxYear: new Date().getFullYear(),
		sort: 1
	});

	const [authentication, setAuthentication] = useState<IAuthData>({
		authorization: localStorage.getItem('rememberMe') === 'true',
		email: '',
		password: '',
		key: '',
		rememberMe: false
	});

	const [region, setRegion] = useState<string>('Київ');

	const [product, setProduct] = useState<IDataTemplate | null>(null);

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

	const contextPushItem = (itemName: string, content: IDataTemplate) => {
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
		<Context.Provider value={{ data, likes, basket, profile, setProfile, modal, setModal, authentication, setAuthentication, callInput, setCallInput, findInput, setFindInput, region, setRegion, product, setProduct, article, setArticle, setLikes, setBasket, contextFindItem, contextRemoveItem, contextPushItem }} >
			{children}
		</Context.Provider>
	)
}