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
                contextRemoveItem('likes', modal.item!.personalKey);
            } else {
                setLike(true);
                contextPushItem('likes', modal.item!);
            }
        } else if (itemName === 'basket') {
            if (buy) {
                setBuy(false);
                contextRemoveItem('basket', modal.item!.personalKey);
            } else {
                setBuy(true);
                contextPushItem('basket', modal.item!);
            }
        }
    };

	useEffect(() => {
		if (modal.visible) {
			document.body.style.overflow = "hidden";
			setLike(contextFindItem("likes", modal.item!.personalKey) ? false : true);
			setBuy(contextFindItem("basket", modal.item!.personalKey) ? false : true);
		} else {
			document.body.style.overflow = "unset";
		}
	}, [modal]);//eslint-disable-line

    return (
        <>
            <div className={s.modalBlockHeader}>
                <div className={s.modalBlockHeaderName}>
                    <span>{modal.item.description}</span>
                </div>
                <div className={s.modalBlockHeaderClose} onClick={() => setModal({
                    visible: false,
                    item: null
                })}>
                    <div className={s.modalBlockHeaderCloseTop}></div>
                    <div className={s.modalBlockHeaderCloseBottom}></div>
                </div>
            </div>
            <div className={s.modalBlockInfo}>
                <div className={s.modalBlockInfoImage}>
                    <Image src={modal.item.imgSrc} alt="product-preview-ploto" />
                </div>
                <div className={s.modalBlockInfoOptions}>
                    <div className={s.modalBlockInfoOptionsTags}>
                        {modal.item?.tags.map(tag => AddsClassForTags(tag))}
                    </div>
                    <div className={s.modalBlockInfoOptionsPrice}>
                        <PriceDivision price={modal.item.price} color />
                    </div>
                    <div className={s.modalBlockInfoOptionsReviews}>
                        <div className={s.modalBlockInfoOptionsReviewsStars}>
                            {modal.item && <ItemStars stars={modal.item.stars} />}
                        </div>
                        <div className={s.modalBlockInfoOptionsReviewsMessage}>
                            <Image src={chat} alt="chat" />
                            <span className={s.messageCount}>{modal.item.reviews}</span>
                        </div>
                    </div>
                    <div className={s.modalBlockInfoOptionsCountry}>
                        <span>{modal.item.country}</span>
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