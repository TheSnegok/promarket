import { FC, useRef, useState } from "react";
import Slide from "./Slide/Slide";
import s from "./Slider.module.sass";

const Slider: FC = () => {

    const position = useRef<number>(0);
    const slideRef = useRef<HTMLHeadingElement | null>(null);
    const [dot, setDot] = useState<number>(0);

    const changeSlide = (option: string, item?: number, index?: number) => {
        if (slideRef && slideRef.current) {
            switch (option) {
                case "dot":
                    if (item !== undefined && index !== undefined) {
                        slideRef.current.style.left = `${position.current = item}%`;
                        setDot(index);
                    }
                    break;
                case "minus":
                    if (position.current === 0) {
                        slideRef.current.style.left = `${position.current = -400}%`;
                        setDot(4);
                    } else {
                        slideRef.current.style.left = `${position.current += 100}%`;
                        setDot(dot => dot - 1);
                    }
                    break;
                case "plus":
                    if (position.current === -400) {
                        slideRef.current.style.left = `${position.current = 0}%`;
                        setDot(0);
                    } else {
                        slideRef.current.style.left = `${position.current -= 100}%`;
                        setDot(dot => dot + 1);
                    }
                    break;
                default:
                    break;
            }
        }
    }

    const slides: string[][] = [
        ['СМЕСИТЕЛИ\n RAIBER', 'уже в наличии', 'ПОДРОБНЕЕ'],
        ['РАКОВИНЫ\n ROCA', 'скоро в наличии', 'ПОДРОБНЕЕ'],
        ['УНИТАЗЫ \n SPIRIT', 'скоро в наличии', 'ПОДРОБНЕЕ'],
        ['ДУШЕВЫЕ КАБИНКИ\n RAIBER', 'уже в наличии', 'ПОДРОБНЕЕ'],
        ['ПАНЕЛЬ\n Аm.Pm', 'скоро в наличии', 'ПОДРОБНЕЕ']];
    const dots: number[] = [0, -100, -200, -300, -400];

    return (
        <div className={s.slider}>
            <div className={s.slides} ref={slideRef}>
                {slides.map((item: string[], index: number) => <Slide key={index} headerText={item[0]} subHeaderText={item[1]} buttonText={item[2]} /> )}
            </div>
            <div className={s.slidesDots}>
                {dots.map((item: number, index: number) => <div key={index} className={dot === index ? s.DotActive : s.Dot} onClick={() => changeSlide("dot", item, index)} />)}
            </div>
            <div className={s.arrowLeft} onClick={() => changeSlide("minus")}>
            </div>
            <div className={s.arrowRight} onClick={() => changeSlide("plus")}>
            </div>
        </div>
    )
}

export default Slider;