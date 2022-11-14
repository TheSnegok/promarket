import { FC, useEffect, useState } from "react";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import { IDataTemplate, useGlobalContext } from "../../Components/Context/Context"
import { GoodsTile } from "../../Components/Templates/GoodsTile/GoodsTile"
import { RangeDoubleSlider } from "../../Components/Templates/RangeDoubleSlider/RangeDoubleSlider";
import s from "../../Styles/pages/SearchPage.module.sass"
import { TYPES } from "../api/api";

const SearchPage: FC = () => {

    const { findInput, setFindInput } = useGlobalContext();
    const thisYear = new Date().getFullYear();

    const [matched, setMatched] = useState<IDataTemplate[]>(findInput.matchFound);
    const [selectValue, setSelectValue] = useState<number>(findInput.sort);
    const [types, setTypes] = useState<string[]>([]);

    const addType = (type: string) => {
        if (types.includes(type)) {
            setTypes(types => types.filter(item => type !== item));
            setMatched(findInput.matchFound)
        } else {
            setTypes(types => [...types, type]);
        }
    }

    const printTypes = Object.keys(TYPES).map((item, index) => index !== 0 && (
        <div className={s.searchOptionsTypesInput} key={index}>
            <input type="checkbox" onChange={() => addType(TYPES[item].name)} />
            <label>{TYPES[item].text}</label>
        </div>
    ));

    const checkMatchedOnType = () => {
        types.length !== 0 && setMatched(findInput.matchFound.filter(item => types.includes(item['type']) && item));
    };

    useEffect(() => {
        checkMatchedOnType();
    }, [types, findInput.matchFound])

    useEffect(() => {
        setFindInput({
            text: findInput.text,
            matchFound: findInput.matchFound,
            minPrice: findInput.minPrice,
            maxPrice: findInput.maxPrice,
            minYear: findInput.minYear,
            maxYear: findInput.maxYear,
            sort: selectValue
        });
        if (selectValue === 1) {
            setMatched([...findInput.matchFound.sort((first, second) => first.price[0] - second.price[0])]);
            checkMatchedOnType();
        } else if (selectValue === 2) {
            setMatched([...findInput.matchFound.sort((first, second) => second.price[0] - first.price[0])]);
            checkMatchedOnType();
        } else if (selectValue === 3) {
            setMatched([...findInput.matchFound.sort((first, second) => second.reviews - first.reviews)]);
            checkMatchedOnType();
        } else if (selectValue === 4) {
            setMatched([...findInput.matchFound.sort((first, second) => second.stars.reduce((first, second) => first + second) - first.stars.reduce((first, second) => first + second))]);
            checkMatchedOnType();
        };// eslint-disable-next-line
    }, [findInput.matchFound, selectValue]);

    return (
        <TypicalPage header="Поиск">
            <div className={s.search}>
                <div className={s.searchOptions}>
                    <div className={s.searchOptionsHeader}>
                        <h3>Сортировать</h3>
                    </div>
                    <div className={s.searchOptionsList}>
                        <select onChange={(e) => setSelectValue(+e.target.value)} value={selectValue}>
                            <option value="1">От дешёвых к дорогим</option>
                            <option value="2">От дорогих к дешёвых</option>
                            <option value="3">Популярные</option>
                            <option value="4">По рейтингу</option>
                        </select>
                    </div>
                    <div className={s.searchOptionsPrice}>
                        <h4>Цена</h4>
                        <RangeDoubleSlider header='Сортировка по цене:' min={0} max={50000} step={10} type='price' />
                    </div>
                    <div className={s.searchOptionsYear}>
                        <h4>Год выпуска</h4>
                        <RangeDoubleSlider header='Сортировка по году выпуска:' min={thisYear - 30} max={thisYear} step={1} type='date' />
                    </div>
                    <div className={s.searchOptionsTypes}>
                        <h4>Тип</h4>
                        {printTypes}
                    </div>
                </div>
                <div className={s.searchMatches}>
                    {matched.length !== 0 ? (
                        <>
                            <h3 className={s.searchMatchesHeader}>
                                Найдено
                            </h3>
                            <div className={s.searchMatchesBlock}>
                                {(matched.map((find, index) => (
                                    (find.price[0] < findInput.maxPrice && find.price[0] > findInput.minPrice) && <GoodsTile index={index} find={find} />
                                )))}
                            </div>
                        </>
                    ) : (
                        <div className={s.searchMatchesNone}>
                            <h3>Ничего не найдено :(</h3>
                        </div>
                    )
                    }
                </div>
            </div>
        </TypicalPage>
    )
}

export default SearchPage;