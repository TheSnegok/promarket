import { StaticImageData } from "next/image";
import { useState } from "react";
import ArticleList from "~/../Components/ArticleList/ArticleList";
import { useGlobalContext } from "~/../Components/Context/Context";
import s from "../../Styles/pages/Articles.module.sass";

const Articles = () => {

	const { data, setArticle } = useGlobalContext();

	const [template, setTemplate] = useState<string>('box');
	const [active, setActive] = useState('box');

	const changeTemplate = (type: string) => {
		if (template !== type) {
			setActive(type);
			setTemplate('hide');
			setTimeout(() => setTemplate(type), 1200);
		}
	}

	return (
		<section className={s.articles}>
			<h1 className={s.articlesHeader}>Статьи</h1>
			<div className={s.articlesWrapper}>
				<div className={s.articlesWrapperOptions}>
					<div className={s.articlesWrapperOptionsTemplate}>
						<div className={active === 'line' ? s.articlesWrapperOptionsTemplateRowActive : s.articlesWrapperOptionsTemplateRow} onClick={() => changeTemplate('line')}>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
						</div>
						<div className={active === 'box' ? s.articlesWrapperOptionsTemplateBoxActive : s.articlesWrapperOptionsTemplateBox} onClick={() => changeTemplate('box')}>
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
				<div className={template !== 'hide' ? (template === 'line' ? s.articlesWrapperItemsLine : s.articlesWrapperItemsBox) : s.articlesWrapperItemsHide}>
					{data.articleList.map((item, index) => <ArticleList key={index} image={item[0] as StaticImageData} header={item[1] as string} setArticle={setArticle} />)}
				</div>
			</div>
		</section >
	)
}

export default Articles;