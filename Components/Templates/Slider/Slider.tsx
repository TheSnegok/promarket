import { FC, useState } from "react";
import Slide from "./Slide/Slide";
import s from "../../../Styles/components/Slider.module.sass";

const Slider = ({ slidesInfo, slideWidth }: { slidesInfo: string[][], slideWidth: number }) => {

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
                if (slide === slidesInfo.length - 1) {
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
            <div className={s.sliderShow} style={{ left: slide * -slideWidth + "px"}} >
                {slidesInfo.map((item: string[], index: number) => <Slide key={index} headerText={item[0]} subHeaderText={item[1]} buttonText={item[2]} slideWidth={slideWidth} />)}
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