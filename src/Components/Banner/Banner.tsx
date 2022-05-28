import { FC } from "react";
import { Link } from "react-router-dom";
import s from './Banner.module.sass';

const Banner: FC = () => {
    return (
        <section className={s.banner}>
            <div className={s.bannerWrapper}>
                <Link to="/">
                    <span>ЕЩЕ ОДИН БАННЕР</span>
                </Link>
            </div>
        </section>
    )
}

export default Banner;