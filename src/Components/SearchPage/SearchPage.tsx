import s from "./SearchPage.module.sass"

export const SearchPage = () => {
    return (
        <section className={s.search}>
            <div className={s.searchHeader}>
                <h2>Поиск</h2>
            </div>
            <div className={s.searchOptions}>
                <div className={s.searchOptionsPrice}>
                    <h3>Цена</h3>
                    <div className={s.searchOptionsPriceRange}>
                        <span>Сортировать по цене:</span>
                        <input type="range" name="" id="" />
                    </div>
                    <div className={s.searchOptionsPriceHigh}>
                        <span className={s.searchOptionsPriceHighText}>От:</span>
                        <input type="number" name="" id="" className={s.searchOptionsPriceHighInput} />
                    </div>
                    <div className={s.searchOptionsPriceLow}>
                        <span className={s.searchOptionsPriceLowText}>До:</span>
                        <input type="number" name="" id="" className={s.searchOptionsPriceLowInput} />
                    </div>
                </div>
                <div className={s.searchOptionsYear}>
                    <h3>Год выпуска:</h3>
                    <div className={s.searchOptionsYearRange}>
                        <span className={s.searchOptionsYearRangeText}>Сортировать по году выпуска:</span>
                        <input className={s.searchOptionsYearRangeInput} type="range" name="" id="" />
                    </div>
                    <div className={s.searchOptionsYearHigh}>
                        <span className={s.searchOptionsYearHighText}>От:</span>
                        <input type="number" name="" id="" className={s.searchOptionsYearHighInput} />
                    </div>
                    <div className={s.searchOptionsYearLow}>
                        <span className={s.searchOptionsYearLowText}>До:</span>
                        <input type="number" name="" id="" className={s.searchOptionsYearLowInput} />
                    </div>
                </div>
            </div>
            <div className={s.searchMatches}>
                {
                    true ? (
                        <div className={s.searchMatchesBlock}>
                            Найдено
                        </div>
                    ) : (
                        <div className={s.searchMatchesNone}>
                            <h2>Ничего не найдено :(</h2>
                        </div>
                    )
                }
            </div>
        </section>
    )
}