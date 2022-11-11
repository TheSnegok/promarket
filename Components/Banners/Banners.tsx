import s from "../../Styles/components/Banners.module.sass";
import { useGlobalContext } from "../Context/Context";
import Slider from "../Templates/Slider/Slider";

const Banners = () => {

	const { data } = useGlobalContext();

	return (
		<section className={s.banners}>
			<Slider slidesInfo={data.slidesBanner} slideWidth={1040} />
			<div className={s.bannersTop}>
				<div className={s.bannerHeader}>
					УНИТАЗЫ<br />
					<p>ДО 10 000 ₽</p>
				</div>
				<div className={s.bannerSubheader}>
					ПОДРОБНЕЕ
				</div>
			</div>
			<div className={s.bannersBot}>
				<div className={s.bannerHeader}>
					ТОВАРЫ<br />
					<p>СО СКИДКОЙ</p>
				</div>
				<div className={s.bannerSubheader}>
					ПОДРОБНЕЕ
				</div>
			</div>
		</section>
	)
}

export default Banners;