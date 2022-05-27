import { createContext, FC, useContext, useState } from "react";
import getPersonalKey from "../Templates/KeyGenerator/KeyGenerator";
import sink from '../../Image/hits/image 1.png';
import bathroom from '../../Image/hits/image 2.png';
import shower from '../../Image/hits/image 3.png';
import toilet from '../../Image/hits/image 4.png';
import heatedTowelRail from '../../Image/hits/image 5.png';
import mixer from '../../Image/stock/1 img.png';
import showerCabin from '../../Image/stock/image 2.png';
import bathroomAcr from '../../Image/stock/image 3.png';
import toilet2 from '../../Image/stock/image 4.png';
import sink2 from '../../Image/stock/image 5.png';

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

interface IData {
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
	slideItems: IData[] | null;
};

interface IStock {
	menu: string[] | null;
	slideItems: IData[] | null;
};

interface IContext {
	data: {
		hits: IHits,
		stock: IStock,
	}
	likes: ILikes;
	basket: ILikes;
	setLikes: (c: ILikes) => void;
	setBasket: (c: ILikes) => void;
	contextFindItem: (itemName: string, wantedKey: string) => boolean | void,
	contextRemoveItem: (itemName: string, wantedKey: string) => void,
	contextPushItem: (itemName: string, content: ILikesItems) => void,
}

const hitsSlideItems = [
	{
		tags: ["Хит"],
		imgSrc: sink,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Раковина Roca Debba 32799400Y, 60x48 см",
		country: "Испания",
		price: [2601],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Хит", "Акция"],
		imgSrc: bathroom,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 2,
		description: "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
		country: "Германия",
		price: [26990, 28601],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Хит"],
		imgSrc: shower,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 24,
		description: "Душевая система Raiber R0808, хром",
		country: "Германия",
		price: [12207],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Хит"],
		imgSrc: toilet,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 4,
		description: "Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
		country: "Испания",
		price: [14764],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Хит"],
		imgSrc: heatedTowelRail,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 10,
		description: "Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт, со...",
		country: "Россия, Украина",
		price: [12730],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Хит"],
		imgSrc: sink,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Раковина Roca Debba 32799400Y, 60x48 см",
		country: "Испания",
		price: [2601],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Хит", "Акция"],
		imgSrc: bathroom,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 2,
		description: "Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB",
		country: "Германия",
		price: [26990, 28601],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Хит"],
		imgSrc: shower,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 24,
		description: "Душевая система Raiber R0808, хром",
		country: "Германия",
		price: [12207],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Хит"],
		imgSrc: toilet,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 4,
		description: "Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт",
		country: "Испания",
		price: [14764],
		personalKey: getPersonalKey()
	},
];

const stockSlideItems = [
	{
		tags: ["Акция"],
		imgSrc: mixer,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Смеситель Hansgrohe Logis 71070000 для раковины",
		country: "Испания",
		price: [6050, 7601],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Акция"],
		imgSrc: showerCabin,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
		country: "Германия",
		price: [84000, 90580],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Акция"],
		imgSrc: bathroomAcr,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
		country: "Германия",
		price: [29990, 36900],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Акция"],
		imgSrc: toilet2,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
		country: "Испания",
		price: [32108, 34900],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Акция"],
		imgSrc: sink2,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 10,
		description: "Раковина Laufen Palace 120 см 8.1170.4.000.104.1",
		country: "Швейцария",
		price: [53458, 58601],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Акция"],
		imgSrc: mixer,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Смеситель Hansgrohe Logis 71070000 для раковины",
		country: "Испания",
		price: [6050, 7601],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Акция"],
		imgSrc: showerCabin,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Душевая кабина Black&White Galaxy G8800, 80 x 110 см",
		country: "Германия",
		price: [84000, 90580],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Акция"],
		imgSrc: bathroomAcr,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя",
		country: "Германия",
		price: [29990, 36900],
		personalKey: getPersonalKey()
	},
	{
		tags: ["Акция"],
		imgSrc: toilet2,
		stars: ["full", "full", "full", "full", "half"],
		reviews: 12,
		description: "Унитаз Laguraty 8074 крышка микролифт, с функцией биде",
		country: "Испания",
		price: [32108, 34900],
		personalKey: getPersonalKey()
	},
];

const hitsMenu = ["Любые товары", "Раковины", "Ванны", "Унитазы", "Душевые системы", "Смесители", "Зеркала", "Душевые кабины", "Стиральные машины"];

const stockMenu = ["Любые товары", "Смесители", "Полотенцесушители", "Биде", "Душевые системы", "Ванны", "Унитазы", "Отопители", "Посудомоечные машины"];

export const Context = createContext<IContext>({
	data: {
		hits: {
			menu: null,
			slideItems: null
		},
		stock: {
			menu: null,
			slideItems: null
		}
	},
	likes: {
		count: 0,
		items: []
	}, basket: {
		count: 0,
		items: []
	},
	setLikes: () => { },
	setBasket: () => { },
	contextFindItem: () => { },
	contextRemoveItem: () => { },
	contextPushItem: () => { }
});

/* 
Plans for tomorrow: need changing style regions list, basket sum with stock and without, create order in basket, creates products page, search page, profile page, authorization, api, responsible design
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
		}
	}

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
		<Context.Provider value={{ data, likes, basket, setLikes, setBasket, contextFindItem, contextRemoveItem, contextPushItem }} >
			{children}
		</Context.Provider>
	)
}