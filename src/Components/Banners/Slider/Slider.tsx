import { FC } from "react";
import s from "./Slider.module.sass";

const Slider: FC = () => {
    return (
        <div className={s.slider}>
            <div className={s.slideFirst}>
                <div className={s.slideHeader}>
                    СМЕСИТЕЛИ<br />
                    RAIBER
                </div>
                <div className={s.slideSubheader}>
                    уже в наличии
                </div>
                <button className={s.slideButton}>ПОДРОБНЕЕ</button>
                <div className={s.slideDots}>
                    <div className={s.firstDot}></div>
                    <div className={s.secondDot}></div>
                    <div className={s.thirdDot}></div>
                    <div className={s.fourthDot}></div>
                    <div className={s.fivethDot}></div>
                </div>
            </div>
            <div className={s.slideSecond}>
                <div className={s.slideHeader}>
                    СМЕСИТЕЛИ<br />
                    RAIBER
                </div>
                <div className={s.slideSubheader}>
                    уже в наличии
                </div>
                <button className={s.slideButton}>ПОДРОБНЕЕ</button>
                <div className={s.slideDots}>
                    <div className={s.firstDot}></div>
                    <div className={s.secondDot}></div>
                    <div className={s.thirdDot}></div>
                    <div className={s.fourthDot}></div>
                    <div className={s.fivethDot}></div>
                </div>
            </div>
            <div className={s.slideThird}>
                <div className={s.slideHeader}>
                    СМЕСИТЕЛИ<br />
                    RAIBER
                </div>
                <div className={s.slideSubheader}>
                    уже в наличии
                </div>
                <button className={s.slideButton}>ПОДРОБНЕЕ</button>
                <div className={s.slideDots}>
                    <div className={s.firstDot}></div>
                    <div className={s.secondDot}></div>
                    <div className={s.thirdDot}></div>
                    <div className={s.fourthDot}></div>
                    <div className={s.fivethDot}></div>
                </div>
            </div>
            <div className={s.slideFourth}>
                <div className={s.slideHeader}>
                    СМЕСИТЕЛИ<br />
                    RAIBER
                </div>
                <div className={s.slideSubheader}>
                    уже в наличии
                </div>
                <button className={s.slideButton}>ПОДРОБНЕЕ</button>
                <div className={s.slideDots}>
                    <div className={s.firstDot}></div>
                    <div className={s.secondDot}></div>
                    <div className={s.thirdDot}></div>
                    <div className={s.fourthDot}></div>
                    <div className={s.fivethDot}></div>
                </div>
            </div>
            <div className={s.slideFiveth}>
                <div className={s.slideHeader}>
                    СМЕСИТЕЛИ<br />
                    RAIBER
                </div>
                <div className={s.slideSubheader}>
                    уже в наличии
                </div>
                <button className={s.slideButton}>ПОДРОБНЕЕ</button>
                <div className={s.slideDots}>
                    <div className={s.firstDot}></div>
                    <div className={s.secondDot}></div>
                    <div className={s.thirdDot}></div>
                    <div className={s.fourthDot}></div>
                    <div className={s.fivethDot}></div>
                </div>
            </div>
            <div className={s.arrowLeft}>
            </div>
            <div className={s.arrowRight}>
            </div>
        </div>
    )
}

export default Slider;