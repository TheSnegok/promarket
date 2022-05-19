import { FC, useState } from "react";
import s from './Likes.module.sass';
import { useGlobalContext } from "../Context/Context";
import { LikesItem } from "../Templates/LikesItem/LikesItem";

const Likes: FC = () => {

	const { likes, setLikes } = useGlobalContext();
	const [image, setImage] = useState<null | string>(null);

	return (
		<div className={s.likes}>
			<div className={s.likesItems}>
				<h1>Понравившиеся</h1>
				{likes.items.length === 0
					? (
						<div className={s.likesEmpty}>
							<span>Вам ничего не понравилось :(</span>
						</div>
					) : (
						<ul className={s.likesList}>
							{likes.items.map((item, index) => <LikesItem content={item} setImage={setImage} key={index} />)}
						</ul>
					)}
			</div>
			<div className={s.likesPreview}>
				{!image ?
					(
						<div className={s.likesPreviewNull}>
						</div>
					) : (
						<div className={s.likesPreviewWrapper}>
							{image && <img src={image} alt='preview-like-item' />}
						</div>
					)}
			</div>
		</div >
	)
}

export default Likes;