import { FC } from "react";
import s from "./RangeDoubleSlider.module.sass";

interface RangeDoubleSliderProps {
    header: string;
}

export const RangeDoubleSlider:FC<RangeDoubleSliderProps> = ({ header }) => {
    return (
        <div className={s.rangeBlock}>
            <span className={s.rangeBlockText}>{header}</span>
            <div className={s.rangeBlockInput}>
                <input type="range" name="" id="" className={s.rangeBlockInputLeft} />
                <input type="range" name="" id="" className={s.rangeBlockInputRight} />
            </div>
            <div className={s.rangeBlockNumbers}>
                <div className={s.rangeBlockNumbersHigh}>
                    <span className={s.rangeBlockNumbersHighText}>От:</span>
                    <input type="number" name="" id="" className={s.rangeBlockNumbersHighInput} />
                </div>
                <div className={s.rangeBlockNumbersLow}>
                    <span className={s.rangeBlockNumbersLowText}>До:</span>
                    <input type="number" name="" id="" className={s.rangeBlockNumbersLowInput} />
                </div>
            </div>
        </div>
    )
}