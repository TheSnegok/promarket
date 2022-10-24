import { StaticImageData } from "next/image";
import ArticleList from "~/../Components/ArticleList/ArticleList";
import { useGlobalContext } from "~/../Components/Context/Context";
import s from "../../Styles/pages/Articles.module.sass";

const Articles = () => {

	const { data, setArticle } = useGlobalContext();

	return (
		<section className={s.articles}>
			<h1 className={s.articlesHeader}>Статьи</h1>
			<div className={s.articlesWrapper}>
				<div className={s.articlesWrapperOptions}>
					<div className={s.articlesWrapperOptionsTemplate}>
						<div className={s.articlesWrapperOptionsTemplateRow}>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
						</div>
						<div className={s.articlesWrapperOptionsTemplateBox}>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxItem}></div>
						</div>
					</div>
				</div>
				<div className={s.articlesWrapperItems}>
					{data.articleList.map((item, index) => <ArticleList key={index} image={item[0] as StaticImageData} header={item[1] as string} setArticle={setArticle} />)}
				</div>
			</div>
		</section>
	)
}

export default Articles;