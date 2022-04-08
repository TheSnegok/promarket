import { FC } from "react";
import s from './Slide.module.sass';

const Slide: FC = () => {
    return (
        <div className={s.slidesItem}>
            <div className={s.slidesHeader}>
                СМЕСИТЕЛИ<br />
                RAIBER
            </div>
            <div className={s.slidesSubheader}>
                уже в наличии
            </div>
            <button className={s.slidesButton}>ПОДРОБНЕЕ</button>
            <div className={s.slideDots}>
                <div className={s.firstDot}></div>
                <div className={s.secondDot}></div>
                <div className={s.thirdDot}></div>
                <div className={s.fourthDot}></div>
                <div className={s.fivethDot}></div>
            </div>
        </div>
    )
}

export default Slide;