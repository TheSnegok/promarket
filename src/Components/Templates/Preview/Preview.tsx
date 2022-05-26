import s from "./Preview.module.sass";
import { ItemStars } from "../ItemStars/ItemStars";
import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import { useGlobalContext } from "../../Context/Context";

interface IPreview {
    indexItem: number;
}

export const Preview = ({ indexItem }: IPreview) => {

    const { likes } = useGlobalContext();

    return (
        <div className={s.preview}>
            {indexItem !== null && (
                <div className={s.previewBlock}>
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
    )
}