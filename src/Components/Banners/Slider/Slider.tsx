import { FC, useRef, useState } from "react";
import Slide from "./Slide/Slide";
import s from "./Slider.module.sass";

const Slider: FC = () => {

    const slideRef = useRef<HTMLHeadingElement | null>(null); 
    const [slidesPosition, setPosition] = useState<string>("0");

    const changePosition = (position: string, slide: number) => {
        
        setPosition(position);
        if(slideRef && slideRef.current) {
            slideRef.current.style.left = slidesPosition;
        }
    }

    const slides = [[

    ], [

    ], [

    ], [

    ], [

    ]];

    return (
        <div className={s.slider}>
            <div className={s.slides} ref={slideRef}>
                {slides.map((item, index) => (
                    <Slide key={index} />
                ))}
            </div>
            <div className={s.arrowLeft}>
            </div>
            <div className={s.arrowRight}>
            </div>
        </div>
    )
}

export default Slider;