import { FC } from "react"
import s from './Collections.module.sass';

const Collections: FC = () => {
    return (
        <section className={s.collections}>
            <h1 className={s.collectionsHeader}>
                Коллекции плитки
            </h1>
            <div className={s.collectionsWrapper}>
                <div className={s.left}>
                    <div className={s.leftHeader}>
                        <h2>
                            Сияние
                        </h2>
                    </div>
                    <div className={s.leftDesckription}>
                        Kerama Marazzi
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.rightUp}>
                        <div className={s.rightUpLeft}>
                            <div className={s.leftHeader}>
                                Вестанвинд
                            </div>
                            <div className={s.leftDesckription}>
                                LB-Ceramics
                            </div>
                        </div>
                        <div className={s.rightUpRight}>
                            <div className={s.rightHeader}>
                                Rotterdam
                            </div>
                            <div className={s.rightDesckription}>
                                Gracia Ceramica
                            </div>
                        </div>
                    </div>
                    <div className={s.rightBot}>
                        <div className={s.rightBotLeft}>
                            <div className={s.leftHeader}>
                                Rane
                            </div>
                            <div className={s.leftDesckription}>
                                Alma Ceramica
                            </div>
                        </div>
                        <div className={s.rightBotRight}>
                            <div className={s.rightHeader}>
                                Гинардо
                            </div>
                            <div className={s.rightDesckription}>
                                Kerama Marazzi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collections;