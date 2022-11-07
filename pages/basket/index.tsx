import { useRouter } from "next/router";
import { useState } from "react";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import { useGlobalContext } from "../../Components/Context/Context";
import { ListItem } from "../../Components/Templates/ListItem/ListItem";
import { numberWithSpaces } from "../../Components/Templates/NumberWithSpaces/NumberWithSpaces";
import { Preview } from "../../Components/Templates/Preview/Preview";
import s from "../../Styles/pages/Basket.module.sass";

const Basket = () => {

    const { basket, authentication } = useGlobalContext();
    const [indexItem, setIndexItem] = useState<undefined | number>(undefined);
    let router = useRouter();

    const totalPrice = (): number => {
        let totalPrice = 0;
        basket.items.forEach(item => totalPrice += item.price[0]);
        return totalPrice;
    }

    const totalPriceStock = (): number => {
        let totalPrice = 0;
        basket.items.forEach(item => totalPrice += item.price[1] ? item.price[1] : item.price[0]);
        return totalPrice;
    }

    return (
        <TypicalPage header="Корзина">
            <div className={s.basket}>
                {
                    basket.items.length === 0 ? (
                        <div className={s.basketEmpty}>
                            <span>Ваша корзина пуста :(</span>
                        </div>
                    ) : (
                        <>
                            <div className={s.content}>
                                <div className={s.contentList}>
                                    <ul>
                                        {basket.items.map((item, index) => (
                                            <ListItem key={index} content={item} setIndexItem={setIndexItem} index={index} isBasket />
                                        ))}
                                    </ul>
                                </div>
                                <div className={s.basketPreview}>
                                    {indexItem === null ?
                                        (
                                            <div className={s.basketPreviewNull}>
                                            </div>
                                        ) : (
                                            <Preview indexItem={indexItem} isBasket />
                                        )}
                                </div>
                            </div>
                            <div className={s.basketTotal}>
                                <h3>Итог:</h3>
                                <div className={s.basketTotalPrice}>
                                    <span>{numberWithSpaces(totalPrice(), true)}</span>
                                    {totalPriceStock() === totalPrice() ? null : (
                                        <span className={s.basketTotalPriceStock}>{numberWithSpaces(totalPriceStock(), true)}</span>
                                    )}
                                </div>
                            </div>
                            <button className={s.basketOrder} onClick={() => !authentication?.authorization ? router.push('/login') : null} >Сделать заказ</button>
                        </>
                    )
                }
            </div>
        </TypicalPage>
    )
}

export default Basket;