import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { IDataTemplate, useGlobalContext } from "../../Components/Context/Context"
import { PriceDivision } from "../../Components/Templates/PriceDivision/PriceDivision";
import { RangeDoubleSlider } from "../../Components/Templates/RangeDoubleSlider/RangeDoubleSlider";
import s from "../../Styles/pages/SearchPage.module.sass"
import { TYPES } from "../api/api";

const SearchPage: FC = () => {

    let router = useRouter();

    const { findInput, setProduct, setFindInput } = useGlobalContext();
    const thisYear = new Date().getFullYear();

    const [matched, setMatched] = useState<IDataTemplate[]>(findInput.matchFound);
    const [selectValue, setSelectValue] = useState<number>(findInput.sort);
    const [types, setTypes] = useState<string[]>([]);

    const selectedItem = (item: IDataTemplate) => {
        setProduct(item);
        setFindInput({
            text: '',
            matchFound: [],
            minPrice: findInput.minPrice,
            maxPrice: findInput.maxPrice,
            minYear: findInput.minYear,
            maxYear: findInput.maxYear,
            sort: findInput.sort
        })
        router.push('/product');
    };

    const addType = (type: string) => {
        if(types.includes(type)) {
            setTypes(types => types.filter(item => type !== item));
            setMatched(findInput.matchFound)
        } else {
            setTypes(types => [...types, type]);
        }
    }

    const typesOptions = Object.keys(TYPES).map((item, index) => index !== 0 && (
        <div className={s.searchBlockOptionsTypesInput} key={index}>
            <input type="checkbox" onChange={() => addType(TYPES[item].name)} />
            <label>{TYPES[item].text}</label>
        </div>
    ));

    useEffect(() => {
        if (selectValue === 1) {
            setFindInput({
                text: findInput.text,
                matchFound: findInput.matchFound,
                minPrice: findInput.minPrice,
                maxPrice: findInput.maxPrice,
                minYear: findInput.minYear,
                maxYear: findInput.maxYear,
                sort: 1
            });
            setMatched([...findInput.matchFound.sort((first, second) => first.price[0] - second.price[0])]);
        } else if (selectValue === 2) {
            setFindInput({
                text: findInput.text,
                matchFound: findInput.matchFound,
                minPrice: findInput.minPrice,
                maxPrice: findInput.maxPrice,
                minYear: findInput.minYear,
                maxYear: findInput.maxYear,
                sort: 2
            });
            setMatched([...findInput.matchFound.sort((first, second) => second.price[0] - first.price[0])]);
        } else if (selectValue === 3) {
            setFindInput({
                text: findInput.text,
                matchFound: findInput.matchFound,
                minPrice: findInput.minPrice,
                maxPrice: findInput.maxPrice,
                minYear: findInput.minYear,
                maxYear: findInput.maxYear,
                sort: 3
            });
            setMatched([...findInput.matchFound.sort((first, second) => second.reviews - first.reviews)]);
        } else if (selectValue === 4) {
            setFindInput({
                text: findInput.text,
                matchFound: findInput.matchFound,
                minPrice: findInput.minPrice,
                maxPrice: findInput.maxPrice,
                minYear: findInput.minYear,
                maxYear: findInput.maxYear,
                sort: 4
            });
            setMatched([...findInput.matchFound.sort((first, second) => second.stars.reduce((first, second) => first + second) - first.stars.reduce((first, second) => first + second))]);
        };// eslint-disable-next-line
    }, [findInput.matchFound, selectValue]);

    useEffect(() => {
        types.length !== 0 && setMatched(findInput.matchFound.filter(item => types.includes(item.type) && item ));
    }, [types, findInput.matchFound])

    return (
        <section className={s.search}>
            <div className={s.searchHeader}>
                <h2>Поиск</h2>
            </div>
            <div className={s.searchBlock}>
                <div className={s.searchBlockOptions}>
                    <h3 className={s.searchBlockOptionsHeader}>Сортировать</h3>
                    <div className={s.searchBlockOptionsList}>
                        <select onChange={(e) => setSelectValue(+e.target.value)} value={selectValue}>
                            <option value="1">От дешёвых к дорогим</option>
                            <option value="2">От дорогих к дешёвых</option>
                            <option value="3">Популярные</option>
                            <option value="4">По рейтингу</option>
                        </select>
                    </div>
                    <div className={s.searchBlockOptionsPrice}>
                        <h4>Цена</h4>
                        <RangeDoubleSlider header='Сортировка по цене:' min={0} max={50000} step={10} type='price' />
                    </div>
                    <div className={s.searchBlockOptionsYear}>
                        <h4>Год выпуска</h4>
                        <RangeDoubleSlider header='Сортировка по году выпуска:' min={thisYear - 30} max={thisYear} step={1} type='date' />
                    </div>
                    <div className={s.searchBlockOptionsTypes}>
                        <h4>Тип</h4>
                        {typesOptions}
                    </div>
                </div>
                <div className={s.searchBlockMatches}>
                    {findInput.matchFound.length !== 0 ? (
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
                                                <Image src={find.imgSrc} alt={find.personalKey} width='90%' height='100px' />
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

export default SearchPage;