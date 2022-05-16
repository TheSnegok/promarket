import { FC } from "react";
import s from './Likes.module.sass';
import { useGlobalContext } from "../Context/Context";
import { LikesItem } from "../Templates/LikesItem/LikesItem";

const Likes: FC = () => {

	const { likes, setLikes } = useGlobalContext();

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
						{likes.items.map((item, index) => <LikesItem content={item} key={index} />)}
					</ul>
				)}
		</div >
	)
}

export default Likes;