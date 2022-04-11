import { FC, useRef, useState } from "react";
import Slide from "./Slide/Slide";
import s from "./Slider.module.sass";

const Slider: FC = () => {

    let position: number = 0;
    const slideRef = useRef<HTMLHeadingElement | null>(null);
    const DotRef = useRef<HTMLHeadingElement | null>(null);
    const [slidesPosition, setPosition] = useState<number>(0);
    const [slide, setSlide] = useState<number>(1);

    const changeSlide = (option: string, dot?: number) => {
        if (slideRef && slideRef.current) {
            if (option === "dot" && dot !== undefined) {
                slideRef.current.style.left = `${dot}%`;
                position = dot;
            }
            if (option === "minus") {
                slideRef.current.style.left = `${position === 0 ? position = -400 : position += 100}%`;
            }
            if (option === "plus") {
                slideRef.current.style.left = `${position === -400 ? position = 0 : position -= 100}%`;
            }
        }
    }

    const slides: string[] = ["", "black", "orange", "yellow", 'red'];
    const dots: number[] = [0, -100, -200, -300, -400];

    return (
        <div className={s.slider}>
            <div className={s.slides} ref={slideRef}>
                {slides.map((item: string, index: number) => (
                    <Slide key={index} bgColor={item} />
                ))}
            </div>
            <div className={s.slidesDots}>
                {dots.map((item, index) => <div key={index} className={s.Dot} ref={DotRef} onClick={() => changeSlide("dot", item)}></div>)}
            </div>
            <div className={s.arrowLeft} onClick={() => changeSlide("minus")}>
            </div>
            <div className={s.arrowRight} onClick={() => changeSlide("plus")}>
            </div>
        </div>
    )
}

export default Slider;