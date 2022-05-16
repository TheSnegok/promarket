import { FC } from "react";
import s from './Likes.module.sass';
import { useGlobalContext } from "../Context/Context";
import { Link } from "react-router-dom";

const Likes: FC = () => {

	const { likes, setLikes } = useGlobalContext();

	console.log(likes.items);

	return (
		<div className={s.likes}>
			<h1>Понравившиеся</h1>
			{likes.items.length === 0
				? (
					<div className={s.likesEmpty}>
						<span>Вам ничего не понравилось :(</span>
					</div>
				) : (
					<ul className={s.likesList}>
						{likes.items.map((item, index) => (
							<li className={s.likesItem} key={index}>
								<div className={s.likesItemImg}>
									<Link to={item.url}>
										<img src={item.imgUrl} alt={item.description} />
									</Link>
								</div>
								<div className={s.likesItemDescription}>
									<Link to={item.url}>
										<span>{item.description}</span>
									</Link>
								</div>
								<div className={s.likesItemCountry}>
									<span>{item.country}</span>
								</div>
								<div className={s.likesItemPrice}>
									{item.price.length === 1 ? (
										<span>{item.price[0]}</span>
									) : (
										<span className={s.likesItemPriceDiscount} data-discount={item.price[1]}>{item.price[0]}</span>
									)}
									
								</div>
								<button className={s.likesItemBuy}>
									Купить
								</button>
							</li>
						))}
					</ul>
				)}
		</div >
	)
}

export default Likes;