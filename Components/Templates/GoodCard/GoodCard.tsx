import { useState, useEffect } from "react"; 
import chat from "../../../public/hits/messageLogo.svg";
import { AddsClassForTags } from "../AddedClassForTag/AddsClassForTags";
import { PriceDivision } from "../PriceDivision/PriceDivision";
import { ItemStars } from "../ItemStars/ItemStars";
import Image from "next/image";
import s from "../../../Styles/components/GoodCard.module.sass";
import { useGlobalContext } from "../../Context/Context";

export const GoodCard = ({ item }) => {

    const { modal, setModal, contextRemoveItem, contextPushItem, contextFindItem } = useGlobalContext();

    const [like, setLike] = useState<boolean>(false);
	const [buy, setBuy] = useState<boolean>(false);

    const clickSetIn = (itemName: string) => {
        
        if (itemName === 'likes') {
            if (like) {
                setLike(false);
                contextRemoveItem('likes', item.personalKey);
            } else {
                setLike(true);
                contextPushItem('likes', item);
            }
        } else if (itemName === 'basket') {
            if (buy) {
                setBuy(false);
                contextRemoveItem('basket', item.personalKey);
            } else {
                setBuy(true);
                contextPushItem('basket', item);
            }
        }
    };

	useEffect(() => {
		if (modal.visible) {
			setLike(contextFindItem("likes", item.personalKey) ? false : true);
			setBuy(contextFindItem("basket", item.personalKey) ? false : true);
		}
	}, [modal]);//eslint-disable-line

    return (
        <>
            <div className={s.modalBlockInfo}>
                <div className={s.modalBlockInfoImage}>
                    <Image src={item.imgSrc} alt="product-preview-ploto" />
                </div>
                <div className={s.modalBlockInfoOptions}>
                    <div className={s.modalBlockInfoOptionsTags}>
                        {item.tags.map(tag => AddsClassForTags(tag))}
                    </div>
                    <div className={s.modalBlockInfoOptionsPrice}>
                        <PriceDivision price={item.price} color />
                    </div>
                    <div className={s.modalBlockInfoOptionsReviews}>
                        <div className={s.modalBlockInfoOptionsReviewsStars}>
                            <ItemStars stars={item.stars} />
                        </div>
                        <div className={s.modalBlockInfoOptionsReviewsMessage}>
                            <Image src={chat} alt="chat" />
                            <span className={s.messageCount}>{item.reviews}</span>
                        </div>
                    </div>
                    <div className={s.modalBlockInfoOptionsCountry}>
                        <span>{item.country}</span>
                    </div>
                    <div className={s.modalBlockInfoOptionsButtons}>
                        <button className={buy ? s.modalBlockInfoOptionsButtonsBasketActive : s.modalBlockInfoOptionsButtonsBasket} onClick={() => clickSetIn('basket')}>{buy ? 'В корзине' : 'В корзину'}</button>
                        <button className={like ? s.modalBlockInfoOptionsButtonsLikesActive : s.modalBlockInfoOptionsButtonsLikes} onClick={() => clickSetIn('likes')}>{like ? 'Не нравится' : 'Нравится'}</button>
                    </div>
                </div>
            </div>
        </>
    )
}