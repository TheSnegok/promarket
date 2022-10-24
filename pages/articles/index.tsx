import { StaticImageData } from "next/image";
import ArticleList from "~/../Components/ArticleList/ArticleList";
import { useGlobalContext } from "~/../Components/Context/Context";
import s from "../../Styles/pages/Articles.module.sass";

const Articles = () => {

	const { data } = useGlobalContext();

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
						<div className={s.articlesWrapperOptionsTemplateRow}>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
						</div>
						<div className={s.articlesWrapperOptionsTemplateBox}>
							<div className={s.articlesWrapperOptionsTemplateBoxLine}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxLine}></div>
							<div className={s.articlesWrapperOptionsTemplateBoxLine}></div>
						</div>
					</div>
				</div>
				<div className={s.articlesWrapperItems}>
					{data.articleList.map((item, index) => <ArticleList key={index} image={item[0] as StaticImageData} header={item[1] as string} />)}
				</div>
			</div>
		</section>
	)
}

export default Articles;