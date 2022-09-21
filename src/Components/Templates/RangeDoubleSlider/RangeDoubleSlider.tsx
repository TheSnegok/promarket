import { FC, useRef, useState, RefObject } from "react";
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

    const changeValue = (side: string, element: RefObject<HTMLInputElement>, sideElement: RefObject<HTMLInputElement>) => {
        if (rightRange.current !== null && leftRange.current !== null && element.current !== null && sideElement.current !== null) {
            if (side === 'right' && +element.current.value > +sideElement.current?.value) {
                setRightSlider(+element.current.value);
                switch (type) {
                    case 'price':
                        setFindInput({
                            text: findInput.text,
                            matchFound: findInput.matchFound,
                            minPrice: findInput.minPrice,
                            maxPrice: +element.current.value,
                            maxYear: findInput.maxYear,
                            minYear: findInput.minYear,
                            sort: findInput.sort
                        });
                        break;
                    case 'date':
                        setFindInput({
                            text: findInput.text,
                            matchFound: findInput.matchFound,
                            minPrice: findInput.minPrice,
                            maxPrice: findInput.maxPrice,
                            maxYear: +element.current.value,
                            minYear: findInput.minYear,
                            sort: findInput.sort
                        });
                        break;
                    default:
                }
            } else if (side === 'left' && +element.current.value < +sideElement.current?.value) {
                setLeftSlider(+element.current.value);
                switch (type) {
                    case 'price':
                        setFindInput({
                            text: findInput.text,
                            matchFound: findInput.matchFound,
                            minPrice: +element.current.value,
                            maxPrice: findInput.maxPrice,
                            maxYear: findInput.maxYear,
                            minYear: findInput.minYear,
                            sort: findInput.sort
                        });
                        break;
                    case 'date':
                        setFindInput({
                            text: findInput.text,
                            matchFound: findInput.matchFound,
                            minPrice: findInput.minPrice,
                            maxPrice: findInput.maxPrice,
                            maxYear: findInput.maxYear,
                            minYear: +element.current.value,
                            sort: findInput.sort
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
                <input min={min} max={max} step={step} value={leftDot} ref={leftRange} type="range" onChange={() => changeValue('left', leftRange, rightRange)} className={s.rangeBlockInputLeft} />
                <input min={min} max={max} step={step} value={rightDot} ref={rightRange} type="range" onChange={() => changeValue('right', rightRange, leftRange)} className={s.rangeBlockInputRight} />
            </div>
            <div className={s.rangeBlockNumbers}>
                <div className={s.rangeBlockNumbersHigh}>
                    <span className={s.rangeBlockNumbersLowText}>От:</span>
                    <input type="number" onChange={() => changeValue('left', maxValue, minValue)} ref={maxValue} value={leftDot} className={s.rangeBlockNumbersHighInput} />
                </div>
                <div className={s.rangeBlockNumbersLow}>
                    <span className={s.rangeBlockNumbersHighText}>До:</span>
                    <input type="number" onChange={() => changeValue('right', minValue, maxValue)} ref={minValue} value={rightDot} className={s.rangeBlockNumbersLowInput} />
                </div>
            </div>
        </div>
    )
}