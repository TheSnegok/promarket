import { FC } from "react";
import s from './Banner.module.sass';

const Banner: FC = () => {
    return (
        <section className={s.banner}>
            <div className={s.bannerWrapper}>
                <span>ЕЩЕ ОДИН БАННЕР</span>
            </div>
        </section>
    )
}

export default Banner;