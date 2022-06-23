import { useState } from 'react';
import s from './SliderItem.module.sass';
import chat from '../../../Image/hits/messageLogo.svg';
import { Link } from 'react-router-dom';
import { ItemStars } from '../ItemStars/ItemStars';
import { useGlobalContext } from '../../Context/Context';
import { AddsClassForTags } from '../AddedClassForTag/AddsClassForTags';
import { PriceDivision } from '../PriceDivision/PriceDivision';

interface IItemProps {
	tags: string[];
	itemImg: string;
	itemStars: string[];
	message: number;
	itemDesc: string;
	itemCountry: string;
	price: number[];
	personalKey: string;
}

const SliderItem = ({ tags, itemImg, itemStars, message, itemDesc, itemCountry, price, personalKey }: IItemProps) => {

	const { setProduct, setModal, contextFindItem, contextPushItem, contextRemoveItem } = useGlobalContext();

	const productObject = {
		url: "/",
		imgUrl: itemImg,
		type: tags,
		stars: itemStars,
		review: message,
		price,
		description: itemDesc,
		country: itemCountry,
		personalKey: personalKey
	}

	const [fill, setFill] = useState<boolean>(contextFindItem('likes', personalKey) ? false : true);
	const [itemBuy, setItemBuy] = useState<boolean>(contextFindItem('basket', personalKey) ? false : true);

	const clickSetIn = (itemName: string) => {
		if (itemName === 'likes') {
			if (fill) {
				setFill(false);
				contextRemoveItem('likes', personalKey);
			} else {
				setFill(true);
				contextPushItem('likes', productObject);
			}
		} else if (itemName === 'basket') {
			if (itemBuy) {
				setItemBuy(false);
				contextRemoveItem('basket', personalKey);
			} else {
				setItemBuy(true);
				contextPushItem('basket', productObject);
			}
		}
	};

	const pushProduct = () => {
		setProduct(productObject);
	}

	return (
		<div className={s.item}>
			<div className={s.itemImg}>
				<Link to="/product" onClick={pushProduct}>
					<div className={s.itemImgTags}>
						{tags.map(tag => AddsClassForTags(tag))}
					</div>
					<img src={itemImg} alt={itemImg} className={s.itemImgMain} />
				</Link>
				<button className={s.itemImgFastLook} onClick={() => setModal({
					visible: true,
					item: productObject
				})}>Быстрый просмотр</button>
				<div className={s.itemImgLike}>
					<svg
						width="32" height="29" viewBox="0 0 32 29"
						onClick={() => clickSetIn('likes')}
						fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill={fill ? "rgb(235 47 92)" : "#2B7BC6"} d="M16 29C15.5 29 15 28.8 14.6 28.5C11.2 25.5 0 15.2 0 8.9C0 4 3.9 0 8.6 0C11.7 0 14.5 1.7 16 4.3C17.5 1.7 20.3 0 23.4 0C28.1 0 32 4 32 8.9C32 15.2 20.8 25.5 17.4 28.5C17 28.8 16.5 29 16 29ZM8.6 2C5 2 2 5.1 2 8.9C2 13.3 9.5 21.4 15.9 27H16C22.5 21.4 30 13.3 30 8.9C30 5.1 27 2 23.4 2C20.7 2 18.3 3.7 17.3 6.3C17.1 6.6 16.8 7 16 7C15.3 7 14.9 6.8 14.7 6.3C13.7 3.7 11.3 2 8.6 2Z" />
					</svg>
				</div>
			</div>
			<div className={s.itemStars}>
				<div className={s.starsWrapper}>
					<ItemStars stars={itemStars} />
				</div>
				<div className={s.message}>
					<Link to="/">
						<img src={chat} alt="chat" />
						<span className={s.messageCount}>{message}</span>
					</Link>
				</div>
			</div>
			<Link to="/product" onClick={pushProduct}>
				<div className={s.itemDescription}>
					{itemDesc}
				</div>
			</Link>
			<div className={s.itemCountry}>
				<span>{itemCountry}</span>
			</div>
			<div className={s.itemBuy}>
				<PriceDivision price={price} />
				<button className={itemBuy ? s.buyActive : s.buy} onClick={() => clickSetIn('basket')}>
					В КОРЗИНУ
				</button>
			</div>
		</div>
	)
}

export default SliderItem;