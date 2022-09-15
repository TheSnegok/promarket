import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IDataTemplate, useGlobalContext } from "../Context/Context"
import { PriceDivision } from "../Templates/PriceDivision/PriceDivision";
import { RangeDoubleSlider } from "./RangeDoubleSlider/RangeDoubleSlider";
import s from "./SearchPage.module.sass"

export const SearchPage: FC = () => {

    let redirect = useNavigate();

    const { findInput, setProduct, setFindInput } = useGlobalContext();
    const thisYear = new Date().getFullYear();

    const [matched, setMatched] = useState<IDataTemplate[]>(findInput.matchFound);

    const selectedItem = (item: IDataTemplate) => {
        setProduct(item);
        setFindInput({
            text: '',
            matchFound: [],
            minPrice: findInput.minPrice,
            maxPrice: findInput.maxPrice,
            minYear: findInput.minYear,
            maxYear: findInput.maxYear
        })
        redirect('/product');
    };

    useEffect(() => {
        setMatched(findInput.matchFound);
    }, [findInput.matchFound])

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
                        <RangeDoubleSlider header='Сортировка по цене:' min={0} max={50000} step={10} type='price' />
                    </div>
                    <div className={s.searchBlockOptionsYear}>
                        <h4>Год выпуска</h4>
                        <RangeDoubleSlider header='Сортировка по году выпуска:' min={thisYear - 30} max={thisYear} step={1} type='date' />
                    </div>
                    <div className={s.searchBlockOptionsList}>
                        <select name="" id="">
                            <option value="">От дешёвых до дорогих</option>
                            <option value="">От дорогих до дешёвых</option>
                            <option value="">Популярные</option>
                            <option value="">По рейтингу</option>
                        </select>
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
                                            (find.price[0] < findInput.maxPrice && find.price[0] > findInput.minPrice) &&
                                            (<div className={s.searchBlockMatchesBlockItem} key={index} onClick={() => selectedItem(find)}>
                                                <div className={s.searchBlockMatchesBlockItemImg}>
                                                    <img src={find.imgSrc} alt={find.personalKey} />
                                                </div>
                                                <div className={s.searchBlockMatchesBlockItemDescription}>
                                                    <span>{find.description}</span>
                                                </div>
                                                <div className={s.searchBlockMatchesBlockItemPrice}>
                                                    <PriceDivision price={find.price} />
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