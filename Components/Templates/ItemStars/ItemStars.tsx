import s from './ItemStars.module.sass';

interface IItemStars {
    stars: number[];
}

export const ItemStars = ({ stars }: IItemStars) => {
    return (
        <>
            {stars.map((item, index) => item === 2 ? (
                <div className={s.stars} key={index}>
                    <div className={s.starsFull}></div>
                </div>
            ) : (item === 1 ? (
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