import s from "./SearchPage.module.sass"

export const SearchPage = () => {
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
                        <div className={s.searchBlockOptionsPriceRange}>
                            <span className={s.searchBlockOptionsPriceRangeText}>Сортировать по цене:</span>
                            <input type="range" name="" id="" className={s.searchBlockOptionsPriceRangeInput} />
                        </div>
                        <div className={s.searchBlockOptionsPriceHigh}>
                            <span className={s.searchBlockOptionsPriceHighText}>От:</span>
                            <input type="number" name="" id="" className={s.searchBlockOptionsPriceHighInput} />
                        </div>
                        <div className={s.searchBlockOptionsPriceLow}>
                            <span className={s.searchBlockOptionsPriceLowText}>До:</span>
                            <input type="number" name="" id="" className={s.searchBlockOptionsPriceLowInput} />
                        </div>
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
                            <h3 className={s.searchBlockMatchesHeader}>
                                Найдено
                            </h3>
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