import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import s from './ListItem.module.sass';

interface ILikesItem {
	content: {
		url: string;
		imgUrl: string;
		type: string[];
		stars: string[];
		review: number;
		price: number[];
		description: string;
		country: string;
		personalKey: string;
	},
	setIndexItem: (value: number | null) => void,
	index: number,
	isBasket?: boolean
}

export const ListItem = ({ content, setIndexItem, index, isBasket }: ILikesItem) => {

	const { contextFindItem, contextPushItem, contextRemoveItem, likes, basket } = useGlobalContext();

	const [liked, setLiked] = useState<boolean>(contextFindItem('likes', content.personalKey) ? false : true);
	const [basketed, setBasketed] = useState<boolean>(contextFindItem('basket', content.personalKey) ? false : true);

	const changedButton = (itemName: string) => {
		if (itemName === 'likes') {
			if (liked) {
				setLiked(false);
				contextRemoveItem('likes', content.personalKey);
			} else {
				setLiked(true);
				contextPushItem('likes', content);
			}
		} else if (itemName === 'basket') {
			if (basketed === true) {
				setBasketed(false);
				contextRemoveItem('basket', content.personalKey);
			} else {
				setBasketed(true);
				contextPushItem('basket', content);
			}
		}
	}

	return (
		<>
			{index !== 0 && <hr />}
			<li className={s.likesItem} onMouseOver={() => setIndexItem(index)} onMouseLeave={() => setIndexItem(null)}>
				<div className={s.likesItemImg}>
					<Link to={content.url}>
						<img src={content.imgUrl} alt={content.description} />
					</Link>
				</div>
				<div className={s.likesItemDescription}>
					<Link to={content.url}>
						<span>{content.description}</span>
					</Link>
				</div>
				<div className={s.likesItemCountry}>
					<span>{content.country}</span>
				</div>
				<div className={s.likesItemPrice}>
					<span>{numberWithSpaces(content.price[0], true)}</span>
				</div>
				{
					isBasket ? (
						<button className={liked ? s.likesItemBuyActive : s.likesItemBuy} onClick={() => changedButton('likes')}>
							{liked ? 'не нравится' : 'нравится'}
						</button>
					) : (
						<button className={basketed ? s.likesItemBuyActive : s.likesItemBuy} onClick={() => changedButton('basket')}>
							{basketed ? 'в корзинe' : 'в корзину'}
						</button>
					)
				}
			</li>
		</>
	)
}