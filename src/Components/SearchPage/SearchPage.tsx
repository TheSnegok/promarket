import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IDataTemplate, useGlobalContext } from "../Context/Context"
import { RangeDoubleSlider } from "./RangeDoubleSlider/RangeDoubleSlider";
import s from "./SearchPage.module.sass"

export const SearchPage: FC = () => {

    let redirect = useNavigate();

    const { findInput, setProduct, setFindInput } = useGlobalContext();

    const [matched, setMatched] = useState<IDataTemplate[]>(findInput.matchFound);

    const selectedItem = (item: IDataTemplate) => {
        setProduct(item);
        setFindInput({
            text: '',
            matchFound: [],
            minValue: findInput.minValue,
            maxValue: findInput.maxValue
        })
        redirect('/product');
    };

    useEffect(() => {
        setMatched(findInput.matchFound);
    }, [findInput.matchFound])


    console.log('render');

    return (
        <section className={s.search}>
            <div className={s.searchHeader}>
                <h2>Поиск</h2>
            </div>
            <div className={s.searchBlock}>
                <div className={s.searchBlockOptions}>
                    <h3 className={s.searchBlockOptionsHeader}>Сортировать</h3>
                    <div className={s.searchBlockOptionsPrice}>
                        <h4>Цена</h4>
                        <RangeDoubleSlider header='Сортировать по цене:' />
                    </div>
                    <div className={s.searchBlockOptionsYear}>
                        <h4>Год выпуска</h4>
                        <div className={s.searchBlockOptionsYearRange}>
                            <span className={s.searchBlockOptionsYearRangeText}>Сортировать по году выпуска:</span>
                            <input className={s.searchBlockOptionsYearRangeInput} type="range" name="" id="" />
                        </div>
                        <div className={s.searchBlockOptionsYearHigh}>
                            <span className={s.searchBlockOptionsYearHighText}>От:</span>
                            <input type="number" name="" id="" className={s.searchBlockOptionsYearHighInput} />
                        </div>
                        <div className={s.searchBlockOptionsYearLow}>
                            <span className={s.searchBlockOptionsYearLowText}>До:</span>
                            <input type="number" name="" id="" className={s.searchBlockOptionsYearLowInput} />
                        </div>
                    </div>
                </div>
                <div className={s.searchBlockMatches}>
                    {true
                        ? (
                            <>
                                <h3 className={s.searchBlockMatchesHeader}>
                                    Найдено
                                </h3>
                                <div className={s.searchBlockMatchesBlock}>
                                    {matched &&
                                        (matched.map((find, index) => (
                                            (find.price[0] < findInput.minValue && find.price[0] > findInput.maxValue) &&
                                            (<div className={s.searchBlockMatchesBlockItem} key={index} onClick={() => selectedItem(find)}>
                                                <div className={s.searchBlockMatchesBlockItemImg}>
                                                    <img src={find.imgSrc} alt={find.personalKey} />
                                                </div>
                                                <div className={s.searchBlockMatchesBlockItemDescription}>
                                                    <span>{find.description}</span>
                                                </div>
                                            </div>)
                                        )))
                                    }
                                </div>
                            </>
                        ) : (
                            <div className={s.searchBlockMatchesNone}>
                                <h3>Ничего не найдено :(</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}