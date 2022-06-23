import { numberWithSpaces } from "../NumberWithSpaces/NumberWithSpaces";
import s from "./PriceDivision.module.sass";

export const PriceDivision = ({ price }: { price: number[] }) => {
    return (
        <>
            {
                price.length === 1 ? (
                    <div className={s.price}>
                        <span>{numberWithSpaces(price[0], true)}</span>
                    </div>
                ) : (
                    <div className={s.price} data-diuscount={numberWithSpaces(price[1], true)}>
                        <span>{numberWithSpaces(price[0], true)}</span>
                    </div>
                )
            }
        </>
    )
} 