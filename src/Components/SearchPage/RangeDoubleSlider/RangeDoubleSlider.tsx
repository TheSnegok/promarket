import { FC, FormEvent, useRef, useState } from "react";
import { useGlobalContext } from "../../Context/Context";
import s from "./RangeDoubleSlider.module.sass";

interface RangeDoubleSliderProps {
    header: string;
    max: number;
    min: number;
    step: number;
    type: string;
}

export const RangeDoubleSlider: FC<RangeDoubleSliderProps> = ({ header, max, min, step, type }) => {

    const { findInput, setFindInput } = useGlobalContext();

    const [leftDot, setLeftSlider] = useState<number>(min);
    const [rightDot, setRightSlider] = useState<number>(max);
    const leftRange = useRef<HTMLInputElement>(null);
    const rightRange = useRef<HTMLInputElement>(null);
    const maxValue = useRef<HTMLInputElement>(null);
    const minValue = useRef<HTMLInputElement>(null);

    const changeValue = (e: FormEvent, side: string) => {
        e.preventDefault();
        if (rightRange.current !== null && leftRange.current !== null) {
            if (side === 'right' && +rightRange.current.value > leftDot) {
                setRightSlider(+rightRange.current.value);
                switch (type) {
                    case 'price':
                        setFindInput({
                            text: findInput.text,
                            matchFound: findInput.matchFound,
                            minPrice: findInput.minPrice,
                            maxPrice: +rightRange.current.value,
                            maxYear: findInput.maxYear,
                            minYear: findInput.minYear
                        });
                        break;
                    case 'date':
                        setFindInput({
                            text: findInput.text,
                            matchFound: findInput.matchFound,
                            minPrice: findInput.minPrice,
                            maxPrice: findInput.maxPrice,
                            maxYear: +rightRange.current.value,
                            minYear: findInput.minYear
                        });
                        break;
                    default:
                }
            } else if (side === 'left' && +leftRange.current.value < rightDot) {
                setLeftSlider(+leftRange.current.value);
                switch (type) {
                    case 'price':
                        setFindInput({
                            text: findInput.text,
                            matchFound: findInput.matchFound,
                            minPrice: +leftRange.current.value,
                            maxPrice: findInput.maxPrice,
                            maxYear: findInput.maxYear,
                            minYear: findInput.minYear
                        });
                        break;
                    case 'date':
                        setFindInput({
                            text: findInput.text,
                            matchFound: findInput.matchFound,
                            minPrice: findInput.minPrice,
                            maxPrice: findInput.maxPrice,
                            maxYear: findInput.maxYear,
                            minYear: +leftRange.current.value
                        });
                        break;
                    default:
                }
            }
        }
    }

    return (
        <div className={s.rangeBlock}>
            <span className={s.rangeBlockText}>{header}</span>
            <div className={s.rangeBlockInput}>
                <input min={min} max={max} step={step} value={leftDot} ref={leftRange} type="range" onChange={(e) => changeValue(e, 'left')} className={s.rangeBlockInputLeft} />
                <input min={min} max={max} step={step} value={rightDot} ref={rightRange} type="range" onChange={(e) => changeValue(e, 'right')} className={s.rangeBlockInputRight} />
            </div>
            <div className={s.rangeBlockNumbers}>
                <div className={s.rangeBlockNumbersHigh}>
                    <span className={s.rangeBlockNumbersLowText}>От:</span>
                    <input type="number" ref={maxValue} value={leftDot} className={s.rangeBlockNumbersHighInput} />
                </div>
                <div className={s.rangeBlockNumbersLow}>
                    <span className={s.rangeBlockNumbersHighText}>До:</span>
                    <input type="number" ref={minValue} value={rightDot} className={s.rangeBlockNumbersLowInput} />
                </div>
            </div>
        </div>
    )
}