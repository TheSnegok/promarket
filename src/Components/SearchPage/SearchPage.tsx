import s from "./SearchPage.module.sass";

export const SearchPage = () => {
    return (
        <section className={s.searchPage}>
            <div className={s.searchPageOptions}></div>
            <div className={s.searchPageList}></div>
        </section>
    )
}