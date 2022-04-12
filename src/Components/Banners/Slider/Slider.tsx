import { FC, InputHTMLAttributes, useRef, useState } from "react";
import Slide from "./Slide/Slide";
import s from "./Slider.module.sass";

const Slider: FC = () => {

    let position: number = 0;
    const slideRef = useRef<HTMLHeadingElement | null>(null);
    const [dot, setDot] = useState<number>(0)
    const [slide, setSlide] = useState<number>(1);

    const changeSlide = (option: string, item?: number, index?: number) => {
        if (slideRef && slideRef.current) {
            if (option === "dot" && item !== undefined && index !== undefined) {
                setDot(index);
                slideRef.current.style.left = `${item}%`;
                position = item;
            }
            if (option === "minus") {
                if (position === 0) {
                    setDot(4);
                    slideRef.current.style.left = `${position = -400}%`;
                } else {
                    setDot(dot => dot - 1);
                    slideRef.current.style.left = `${position += 100}%`;
                }
            }
            if (option === "plus") {
                if (position === -400) {
                    setDot(0);
                    slideRef.current.style.left = `${position = 0}%`;
                } else {
                    setDot(dot + 1);
                    slideRef.current.style.left = `${position -= 100}%`;
                }
            }
            console.log(position, dot);
        }
    }

    const slides: [][] = [[], [], [], [], []];
    const dots: number[] = [0, -100, -200, -300, -400];

    return (
        <div className={s.slider}>
            <div className={s.slides} ref={slideRef}>
                {slides.map((item, index: number) => (
                    <Slide key={index} />
                ))}
            </div>
            <div className={s.slidesDots}>
                {dots.map((item: number, index: number) => <div key={index} className={dot === index ? s.DotActive : s.Dot}  onClick={() => changeSlide("dot", item, index)} />)}
            </div>
            <div className={s.arrowLeft} onClick={() => changeSlide("minus")}>
            </div>
            <div className={s.arrowRight} onClick={() => changeSlide("plus")}>
            </div>
        </div>
    )
}

export default Slider;