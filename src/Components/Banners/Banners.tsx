import { FC } from "react";
import s from "./Banners.module.sass";

const Banners: FC = () => {
    return (
        <section className={s.banners}>
            <div className={s.bannersSlider}>
                <div className={s.sliderHeader}>
                    СМЕСИТЕЛИ<br />
                    RAIBER
                </div>
                <div className={s.sliderSubheader}>
                    уже в наличии
                </div>
                <button className={s.sliderButton}>ПОДРОБНЕЕ</button>
                <div className={s.dots}>
                    <div className={s.firstDot}></div>
                    <div className={s.secondDot}></div>
                    <div className={s.thirdDot}></div>
                    <div className={s.fourthDot}></div>
                    <div className={s.fivethDot}></div>
                </div>
                <div className={s.arrowLeft}>
                    <div className={s.arrowLeftLineOne}></div>
                    <div className={s.arrowLeftLineTwo}></div>
                </div>
                <div className={s.arrowRight}>
                    <div className={s.arrowRightLineOne}></div>
                    <div className={s.arrowRightLineTwo}></div>
                </div>
            </div>
            <div className={s.bannersTop}>
                <div className={s.bannerHeader}>
                    УНИТАЗЫ<br />
                    <p>ДО 10 000 ₽</p>
                </div>
                <div className={s.bannerSubheader}>
                    ПОДРОБНЕЕ
                </div>
            </div>
            <div className={s.bannersBot}>
                <div className={s.bannerHeader}>
                    ТОВАРЫ<br />
                    <p>СО СКИДКОЙ</p>
                </div>
                <div className={s.bannerSubheader}>
                    ПОДРОБНЕЕ
                </div>
            </div>
        </section>
    )
}

export default Banners;