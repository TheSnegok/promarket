import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import s from "../../../Styles/components/PriceDivision.module.sass";

export const PriceDivision = ({ price, color }: { price: number[], color?: boolean }) => {
    return (
        <>
            {
                price.length === 1 ? (
                    <div className={s.price}>
                        <span className={color ? s.priceBlackOnce : s.priceWhiteOnce}>{numberWithSpaces(price[0], true)}</span>
                    </div>
                ) : (
                    <div className={s.price} data-diuscount={numberWithSpaces(price[1], true)}>
                        <span className={color ? s.priceBlack : s.priceWhite}>{numberWithSpaces(price[0], true)}</span>
                    </div>
                )
            }
        </>
    )
} 