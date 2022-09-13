import { FC, FormEvent, useRef, useState } from "react";
import { useGlobalContext } from "../../Context/Context";
import s from "./RangeDoubleSlider.module.sass";

interface RangeDoubleSliderProps {
    header: string;
}

export const RangeDoubleSlider: FC<RangeDoubleSliderProps> = ({ header }) => {

    const { findInput, setFindInput } = useGlobalContext();

    const [leftSlider, setLeftSlider] = useState<number>(0);
    const [rightSlider, setRightSlider] = useState<number>(50000);
    const leftDot = useRef<HTMLInputElement>(null);
    const rightDot = useRef<HTMLInputElement>(null);
    const maxValue = useRef<HTMLInputElement>(null);
    const minValue = useRef<HTMLInputElement>(null);

    const changeValue = (e: FormEvent, side: string) => {
        e.preventDefault();
        if (rightDot.current !== null && leftDot.current !== null) {
            if (side === 'right' && +rightDot.current.value > leftSlider + 1000) {
                setRightSlider(+rightDot.current.value);
                setFindInput({
                    text: findInput.text,
                    matchFound: findInput.matchFound,
                    minValue: +rightDot.current.value,
                    maxValue: findInput.maxValue
                });
            } else if (side === 'left' && +leftDot.current.value < rightSlider - 1000) {
                setLeftSlider(+leftDot.current.value);
                setFindInput({
                    text: findInput.text,
                    matchFound: findInput.matchFound,
                    minValue: findInput.minValue,
                    maxValue: +leftDot.current.value
                });
            }
        }
    }

    return (
        <div className={s.rangeBlock}>
            <span className={s.rangeBlockText}>{header}</span>
            <div className={s.rangeBlockInput}>
                <input min='0' max='50000' step={1} value={leftSlider} ref={leftDot} type="range" onInput={(e) => changeValue(e, 'left')} className={s.rangeBlockInputLeft} />
                <input min='0' max='50000' step={1} value={rightSlider} ref={rightDot} type="range" onInput={(e) => changeValue(e, 'right')} className={s.rangeBlockInputRight} />
            </div>
            <div className={s.rangeBlockNumbers}>
                <div className={s.rangeBlockNumbersHigh}>
                    <span className={s.rangeBlockNumbersLowText}>От:</span>
                    <input type="number" ref={maxValue} value={leftSlider} className={s.rangeBlockNumbersHighInput} />
                </div>
                <div className={s.rangeBlockNumbersLow}>
                    <span className={s.rangeBlockNumbersHighText}>До:</span>
                    <input type="number" ref={minValue} value={rightSlider} className={s.rangeBlockNumbersLowInput} />
                </div>
            </div>
        </div>
    )
}