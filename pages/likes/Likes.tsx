import { FC, useState } from "react";
import s from './Likes.module.sass';
import { useGlobalContext } from "../../Components/Context/Context";
import { ListItem } from "../../Components/Templates/ListItem/ListItem";
import { Preview } from "../../Components/Templates/Preview/Preview";

const Likes: FC = () => {

	const { likes } = useGlobalContext();
	const [indexItem, setIndexItem] = useState<undefined | number>(undefined);

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
						<div className={s.likesList}>
							<ul>
								{likes.items.map((item, index) => <ListItem content={item} setIndexItem={setIndexItem} index={index} key={index} />)}
							</ul>
						</div>
						<div className={s.likesPreview}>
							{indexItem === null ?
								(
									<div className={s.likesPreviewNull}>
									</div>
								) : (
									<Preview indexItem={indexItem} />
								)}
						</div>
					</div>
				)}
		</div>
	)
}

export default Likes;