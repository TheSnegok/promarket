import { useState } from "react";
import { Link } from "react-router-dom";
import { IDataTemplate, useGlobalContext } from "../../Context/Context";
import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import s from './ListItem.module.sass';

interface IItem {
	content: IDataTemplate,
	setIndexItem: (value: number | undefined) => void,
	index: number,
	isBasket?: boolean
}

export const ListItem = ({ content, setIndexItem, index, isBasket }: IItem) => {

	const { setProduct, contextFindItem, contextPushItem, contextRemoveItem } = useGlobalContext();

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

	const removeProduct = (productItem: string) => {
		setIndexItem(undefined);
		contextRemoveItem(productItem, content.personalKey);
	}

	const pushProduct = () => {
		setProduct(content);
	}

	return (
		<>
			{index !== 0 && <hr />}
			<li className={s.Item} onMouseOver={() => setIndexItem(index)} onMouseLeave={() => setIndexItem(undefined)}>
				<div className={s.ItemImg}>
					<Link to={"/product"} onClick={pushProduct}>
						<img src={content.imgSrc} alt={content.description} />
					</Link>
				</div>
				<div className={s.ItemDescription}>
					<Link to={"/product"} onClick={pushProduct}>
						<span>{content.description}</span>
					</Link>
				</div>
				<div className={s.ItemCountry}>
					<span>{content.country}</span>
				</div>
				<div className={s.ItemPrice}>
					<span>{numberWithSpaces(content.price[0], true)}</span>
				</div>
				{
					isBasket ? (
						<button className={liked ? s.ItemBuyActive : s.ItemBuy} onClick={() => changedButton('likes')}>
							{liked ? 'не нравится' : 'нравится'}
						</button>
					) : (
						<button className={basketed ? s.ItemBuyActive : s.ItemBuy} onClick={() => changedButton('basket')}>
							{basketed ? 'в корзинe' : 'в корзину'}
						</button>
					)
				}
				<div className={s.ItemRemove} onClick={() => removeProduct(isBasket ? 'basket' : 'likes')} >
					<div className={s.ItemRemoveTop}></div>
					<div className={s.ItemRemoveBottom}></div>
				</div>
			</li>
		</>
	)
}