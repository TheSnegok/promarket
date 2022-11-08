import { FC, useState } from "react";
import Slide from "./Slide/Slide";
import s from "../../../Styles/components/Slider.module.sass";

const Slider = ({ slidesInfo }: { slidesInfo: string[][] }) => {

    const [slide, setSlide] = useState<number>(0);

    const changeSlide = (option: string, index?: number) => {
        switch (option) {
            case "dot":
                if (index !== undefined) {
                    setSlide(index);
                }
                break;
            case "minus":
                if (slide === 0) {
                    setSlide(4);
                } else {
                    setSlide(slide => slide - 1);
                }
                break;
            case "plus":
                if (slide === 4) {
                    setSlide(0);
                } else {
                    setSlide(slide => slide + 1);
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className={s.slider}>
            <div className={slide === 0 ? s.first : slide === 1 ? s.second : slide === 2 ? s.third : slide === 3 ? s.fourth : slide === 4 ? s.fiveth : s.first} style={{}} >
                {slidesInfo.map((item: string[], index: number) => <Slide key={index} headerText={item[0]} subHeaderText={item[1]} buttonText={item[2]} />)}
            </div>
            <div className={s.sliderDots}>
                {slidesInfo.map((item, index: number) => <div key={index} className={slide === index ? s.DotActive : s.Dot} onClick={() => changeSlide("dot", index)} />)}
            </div>
            <div className={s.arrowLeft} onClick={() => changeSlide("minus")}>
            </div>
            <div className={s.arrowRight} onClick={() => changeSlide("plus")}>
            </div>
        </div>
    )
}

export default Slider;