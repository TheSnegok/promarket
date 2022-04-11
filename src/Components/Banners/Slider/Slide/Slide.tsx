import s from './Slide.module.sass';

const Slide = () => {
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
        </div>
    )
}

export default Slide;