import { FC, useState } from "react";
import Slide from "./Slide/Slide";
import s from "./Slider.module.sass";

const Slider: FC = () => {

    const [position, setPosition] = useState<number>(0);
    const [dot, setDot] = useState<number>(0);

    const changeSlide = (option: string, item?: number, index?: number) => {
        switch (option) {
            case "dot":
                if (item !== undefined && index !== undefined) {
                    setPosition(item);
                    setDot(index);
                }
                break;
            case "minus":
                if (position === 0) {
                    setPosition(-400);
                    setDot(4);
                } else {
                    setPosition(position => position + 100 );
                    setDot(dot => dot - 1);
                }
                break;
            case "plus":
                if (position === -400) {
                    setPosition(0);
                    setDot(0);
                } else {
                    setPosition(position => position - 100);
                    setDot(dot => dot + 1);
                }
                break;
            default:
                break;
        }
    }

    const slides: string[][] = [
        ['СМЕСИТЕЛИ\n RAIBER', 'уже в наличии', 'ПОДРОБНЕЕ'],
        ['РАКОВИНЫ\n ROCA', 'скоро в наличии', 'ПОДРОБНЕЕ'],
        ['УНИТАЗЫ \n SPIRIT', 'скоро в наличии', 'ПОДРОБНЕЕ'],
        ['ДУШЕВЫЕ КАБИНКИ\n RAIBER', 'уже в наличии', 'ПОДРОБНЕЕ'],
        ['ПАНЕЛЬ\n Аm.Pm', 'скоро в наличии', 'ПОДРОБНЕЕ']
    ];

    return (
        <div className={s.slider}>
            <div className={s.slides} style={{ left: position + '%' }}>
                {slides.map((item: string[], index: number) => <Slide key={index} headerText={item[0]} subHeaderText={item[1]} buttonText={item[2]} />)}
            </div>
            <div className={s.slidesDots}>
                {slides.map((item, index: number) => <div key={index} className={dot === index ? s.DotActive : s.Dot} onClick={() => changeSlide("dot", (index * -100), index)} />)}
            </div>
            <div className={s.arrowLeft} onClick={() => changeSlide("minus")}>
            </div>
            <div className={s.arrowRight} onClick={() => changeSlide("plus")}>
            </div>
        </div>
    )
}

export default Slider;