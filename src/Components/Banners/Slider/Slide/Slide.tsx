import { useRef } from "react";
import s from './Slide.module.sass';

const Slide = ({ bgColor }: { bgColor: string }) => {
    const slidesRef = useRef<HTMLHeadingElement | null>(null)
    if(slidesRef && slidesRef.current) {
        slidesRef.current.style.backgroundColor = bgColor;
    }
    return (
        <div className={s.slidesItem} ref={slidesRef}>
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