import { useState, useEffect } from "react";
import chat from "../../../public/hits/messageLogo.svg";
import { AddsClassForTags } from "../AddedClassForTag/AddsClassForTags";
import { PriceDivision } from "../PriceDivision/PriceDivision";
import { ItemStars } from "../ItemStars/ItemStars";
import Image from "next/image";
import s from "../../../Styles/components/GoodCard.module.sass";
import { useGlobalContext } from "../../Context/Context";

export const GoodCard = ({ item }) => {

    const { contextRemoveItem, contextPushItem, contextFindItem } = useGlobalContext();

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
        setLike(contextFindItem("likes", item.personalKey) ? false : true);
        setBuy(contextFindItem("basket", item.personalKey) ? false : true);
    }, []);

    return (
        <>
            <div className={s.Info}>
                <div className={s.InfoHeader}>
                    <div className={s.InfoHeaderName}>
                        <span>{item.description}</span>
                    </div>
                    <div className={s.InfoHeaderTags}>
                        {item.tags.map(tag => AddsClassForTags(tag))}
                    </div>
                </div>
                <div className={s.InfoWrapper}>
                    <div className={s.InfoWrapperImage}>
                        <Image src={item.imgSrc} alt="product-preview-ploto" />
                    </div>
                    <div className={s.InfoWrapperOptions}>
                        <div className={s.InfoWrapperOptionsReviews}>
                            <div className={s.InfoWrapperOptionsReviewsStars}>
                                <ItemStars stars={item.stars} />
                            </div>
                            <div className={s.InfoWrapperOptionsReviewsMessage}>
                                <Image src={chat} alt="chat" />
                                <span className={s.messageCount}>{item.reviews}</span>
                            </div>
                        </div>
                        <div className={s.InfoWrapperOptionsPrice}>
                            <PriceDivision price={item.price} color />
                        </div>
                        <div className={s.InfoWrapperOptionsCountry}>
                            <span>{item.country}</span>
                        </div>
                        <div className={s.InfoWrapperOptionsButtons}>
                            <button className={buy ? s.InfoWrapperOptionsButtonsBasketActive : s.InfoWrapperOptionsButtonsBasket} onClick={() => clickSetIn('basket')}>{buy ? 'В корзине' : 'В корзину'}</button>
                            <button className={like ? s.InfoWrapperOptionsButtonsLikesActive : s.InfoWrapperOptionsButtonsLikes} onClick={() => clickSetIn('likes')}>{like ? 'Не нравится' : 'Нравится'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}