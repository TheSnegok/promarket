import s from "../../../Styles/components/Preview.module.sass";
import { ItemStars } from "../ItemStars/ItemStars";
import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import { useGlobalContext } from "../../Context/Context";
import Image from "next/image";

interface IPreview {
    indexItem: number | undefined;
    isBasket?: boolean;
}

export const Preview = ({ indexItem, isBasket }: IPreview) => {

    const { likes, basket } = useGlobalContext();
    const contextItems = isBasket ? basket.items : likes.items;

    return (
        <div className={s.preview}>
            {indexItem !== undefined && (
                <div className={s.previewBlock}>
                    <Image src={contextItems[indexItem].imgSrc} className={s.previewImg} alt='preview-like-item'  />
                    <div className={s.previewWrapper}>
                        <div className={s.previewWrapperStars}>
                            <ItemStars stars={contextItems[indexItem].stars} />
                        </div>
                        <div className={s.previewWrapperCountry}>
                            {contextItems[indexItem].country}
                        </div>
                    </div>
                    <div className={s.previewDescription}>{contextItems[indexItem].description}</div>
                    {contextItems[indexItem].price.length === 1 ? (
                        <div className={s.previewPrice}>{numberWithSpaces(contextItems[indexItem].price[0], true)}</div>
                    ) : (
                        <div className={s.previewWrapper}>
                            <div className={s.previewWrapperPrice}>{numberWithSpaces(contextItems[indexItem].price[0], true)}</div>
                            <div className={s.previewWrapperStock}>{numberWithSpaces(contextItems[indexItem].price[1], true)}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}