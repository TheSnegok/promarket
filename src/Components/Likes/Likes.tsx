import { FC, useState } from "react";
import s from './Likes.module.sass';
import { useGlobalContext } from "../Context/Context";
import { LikesItem } from "../Templates/LikesItem/LikesItem";

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
							{likes.items.map((item, index) => <LikesItem content={item} setIndexItem={setIndexItem} index={index} key={index} />)}
						</ul>
						<div className={s.likesPreview}>
							{indexItem === null ?
								(
									<div className={s.likesPreviewNull}>
									</div>
								) : (
									<div className={s.likesPreviewWrapper}>
										{indexItem !== null && (
											<img src={likes.items[indexItem].imgUrl} className={s.previewImg} alt='preview-like-item' />
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