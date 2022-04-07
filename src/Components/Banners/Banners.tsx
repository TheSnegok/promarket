import { FC } from "react";
import s from "./Banners.module.sass";
import Slider from "./Slider/Slider";

const Banners: FC = () => {
	return (
		<section className={s.banners}>
			<Slider />
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