import { FC, useState } from "react";
import s from './Likes.module.sass';
import { useGlobalContext } from "../Context/Context";
import { ListItem } from "../Templates/ListItem/ListItem";
import { ItemStars } from "../Templates/ItemStars/ItemStars";
import { numberWithSpaces } from "../Templates/NumberWithSpaces/NumberWithSpaces";

const Likes: FC = () => {

	const { likes, setLikes } = useGlobalContext();
	const [indexItem, setIndexItem] = useState<null | number>(null);

	return (
		<div className={s.likes}>
			<div className={s.likesHeader}>
				<h1>Понравившиеся</h1>
			</div>
			{likes.items.length === 0
				? (
					<div className={s.likesEmpty}>
						<span>Вам ничего не понравилось :(</span>
					</div>
				) : (
					<div className={s.likesItems}>
						<ul className={s.likesList}>
							{likes.items.map((item, index) => <ListItem content={item} setIndexItem={setIndexItem} index={index} key={index} />)}
						</ul>
						<div className={s.likesPreview}>
							{indexItem === null ?
								(
									<div className={s.likesPreviewNull}>
									</div>
								) : (
									<div className={s.likesPreviewAnimation}>
										{indexItem !== null && (
											<div className={s.preview}>
												<img src={likes.items[indexItem].imgUrl} className={s.previewImg} alt='preview-like-item' />
												<div className={s.previewWrapper}>
													<div className={s.previewWrapperStars}>
														<ItemStars stars={likes.items[indexItem].stars} />
													</div>
													<div className={s.previewWrapperCountry}>
														{likes.items[indexItem].country}
													</div>
												</div>
												<div className={s.previewDescription}>{likes.items[indexItem].description}</div>
												{likes.items[indexItem].price.length === 1 ? (
													<div className={s.previewPrice}>{numberWithSpaces(likes.items[indexItem].price[0], true)}</div>
												) : (
													<div className={s.previewWrapper}>
														<div className={s.previewWrapperPrice}>{numberWithSpaces(likes.items[indexItem].price[0], true)}</div>
														<div className={s.previewWrapperStock}>{numberWithSpaces(likes.items[indexItem].price[1], true)}</div>
													</div>
												)}
											</div>
										)}
									</div>
								)}
						</div>
					</div>
				)}
		</div>
	)
}

export default Likes;