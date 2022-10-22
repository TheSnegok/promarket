import s from "../../Styles/pages/Articles.module.sass";

const Articles = () => {
    return (
        <section className={s.articles}>
            <h1 className={s.articlesHeader}>Статьи</h1>
            <div className={s.articlesWrapper}>
                <div className={s.articlesWrapperOptions}>
                    <div className={s.articlesWrapperOptionsSort}>
                        <div className={s.articlesWrapperOptionsSelected}>
                            <div className={s.articlesWrapperOptionsSelectedImg}>
                                <img src="" alt="" />
                                <span></span>
                            </div>
                        </div>
                        <div className={s.articlesWrapperOptionsList}>
                            <div className={s.articlesWrapperOptionsListDateNew}>
                                <img src="" alt="" />
                                <span></span>
                            </div>
                            <div className={s.articlesWrapperOptionsListDateLast}>
                                <img src="" alt="" />
                                <span></span>
                            </div>
                            <div className={s.articlesWrapperOptionsListMoreRead}>
                                <img src="" alt="" />
                                <span></span>
                            </div>
                            <div className={s.articlesWrapperOptionsListLessRead}>
                                <img src="" alt="" />
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className={s.articlesWrapperOptionsTemplate}>
                        <div className={s.articlesWrapperOptionsTemplateRow}></div>
                        <div className={s.articlesWrapperOptionsTemplateBox}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles;