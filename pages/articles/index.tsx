import { StaticImageData } from "next/image";
import { useState } from "react";
import ArticleList from "~/../Components/ArticleList/ArticleList";
import { useGlobalContext } from "~/../Components/Context/Context";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage";
import s from "../../Styles/pages/Articles.module.sass";

const Articles = () => {

	const { data, setArticle } = useGlobalContext();

	const [template, setTemplate] = useState<string>('box');
	const [hidden, setHidden] = useState<boolean>(false);

	const changeTemplate = (type: string) => {
		if (template !== type) {
			setHidden(true);
			setTimeout(() => { setTemplate(type); setHidden(false); }, 1000);
		}
	}

	return (
		<TypicalPage header="Статьи">
			<div className={s.articlesWrapper}>
				<div className={s.articlesWrapperOptions}>
					<div className={s.articlesWrapperOptionsTemplate}>
						<div className={template === 'line' ? s.articlesWrapperOptionsTemplateRowActive : s.articlesWrapperOptionsTemplateRow} onClick={() => changeTemplate('line')}>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
							<div className={s.articlesWrapperOptionsTemplateRowLine}></div>
						</div>
						<div className={template === 'box' ? s.articlesWrapperOptionsTemplateBoxActive : s.articlesWrapperOptionsTemplateBox} onClick={() => changeTemplate('box')}>
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
				<div className={template === 'line' ? s.articlesWrapperItemsLine : s.articlesWrapperItemsBox} style={hidden ? { opacity: 0 } : { opacity: 1 }} >
					{data.articleList.map((item, index) => <ArticleList key={index} image={item[0] as StaticImageData} header={item[1] as string} setArticle={setArticle} row={template === "line"} />)}
				</div>
			</div>
		</TypicalPage>
	)
}

export default Articles;