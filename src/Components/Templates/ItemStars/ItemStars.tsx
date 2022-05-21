import s from './ItemStars.module.sass';

interface IItemStars {
    stars: string[];
}

export const ItemStars = ({ stars }: IItemStars) => {
    return (
        <>
            {stars.map((item, index) => item === "full" ? (
                <div className={s.stars} key={index}>
                    <div className={s.starsFull}></div>
                </div>
            ) : (item === "half" ? (
                <div className={s.stars} key={index}>
                    <div className={s.starsHalf}></div>
                </div>
            ) : (
                <div className={s.stars} key={index}>
                    <div className={s.starsOff}></div>
                </div>
            )
            ))}
        </>
    )
}