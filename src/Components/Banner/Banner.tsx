import { FC } from "react";
import s from './Banner.module.sass';

const Banner: FC = () => {
    return (
        <section className={s.banner}>
            <div className={s.bannerWrapper}>
                <a href="/">
                    <span>ЕЩЕ ОДИН БАННЕР</span>
                </a>
            </div>
        </section>
    )
}

export default Banner;