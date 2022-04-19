import { FC } from "react";
import s from './Brands.module.sass';
import hansgrohe from '../../Image/brands/image 17.png';
import grohe from '../../Image/brands/image 16.png';
import stworki from '../../Image/brands/image 18.png';
import ampm from '../../Image/brands/image 19.png';
import jacot from '../../Image/brands/image 20.png';
import cersanit from '../../Image/brands/image 21.png';
import geberit from '../../Image/brands/image 22.png';
import roca from '../../Image/brands/image 23.png';
import vitra from '../../Image/brands/image 24.png';
import villeroy from '../../Image/brands/image 25.png';
import isideal from '../../Image/brands/image 26.png';
import aquanika from '../../Image/brands/image 27.png';
import benetto from '../../Image/brands/image 28.png';
import colombo from '../../Image/brands/image 29.png';
import dyson from '../../Image/brands/image 30.png';
import goronje from '../../Image/brands/image 31.png';
import jado from '../../Image/brands/image 32.png';
import lvi from '../../Image/brands/image 33.png';

const Brands: FC = () => {
    return (
        <section className={s.brands}>
            <h1 className={s.brandsHeader}>Популярные бренды</h1>
            <div className={s.brandsWrapper}>
                <div className={s.brandsLogo}>
                    <a href="/">
                        <img src={hansgrohe} alt="brand logo" />
                    </a>
                </div>
                <div className={s.brandsLogo}>
                    <img src={grohe} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={stworki} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={ampm} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={jacot} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={cersanit} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={geberit} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={roca} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={vitra} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={villeroy} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={isideal} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={aquanika} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={benetto} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={colombo} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={dyson} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={goronje} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={jado} alt="brand logo" />
                </div>
                <div className={s.brandsLogo}>
                    <img src={lvi} alt="brand logo" />
                </div>
            </div>
        </section>
    )
}

export default Brands;