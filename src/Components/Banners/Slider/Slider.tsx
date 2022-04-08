import { FC, useRef, useState } from "react";
import Slide from "./Slide/Slide";
import s from "./Slider.module.sass";

const Slider: FC = () => {

    const slideRef = useRef<HTMLHeadingElement | null>(null); 
    const [slidesPosition, setPosition] = useState<number>(0);
    const [slide, setSlide] = useState<number>(1);

    // const changePosition = (operation: boolean) => {
    //     if(operation) {
    //         setPosition(slidesPosition - 100);
    //         if(slideRef && slideRef.current) {
    //             slideRef.current.style.left = slidesPosition.toString() + "%";
    //         }
    //     } else {

    //     }
        
    // }

    const changeSlideDots = (position: number) => {
        if(slideRef && slideRef.current) {
            slideRef.current.style.left = `${position}%`;
        }
    }

    const slides: string[] = ["blue", "black", "orange", "yellow", 'red'];

    return (
        <div className={s.slider}>
            <div className={s.slides} ref={slideRef}>
                {slides.map((item: string, index: number) => (
                    <Slide key={index} bgColor={item} />
                ))}
            </div>
            <div className={s.slidesDots}>
                <div className={s.Dot} onClick={() => changeSlideDots(0)}></div>
                <div className={s.Dot} onClick={() => changeSlideDots(-100)}></div>
                <div className={s.Dot} onClick={() => changeSlideDots(-200)}></div>
                <div className={s.Dot} onClick={() => changeSlideDots(-300)}></div>
                <div className={s.Dot} onClick={() => changeSlideDots(-400)}></div>
            </div>
            {/* <div className={s.arrowLeft} onClick={() => changePosition(true)}>
            </div>
            <div className={s.arrowRight} onClick={() => changePosition(false)}>
            </div> */}
        </div>
    )
}

export default Slider;