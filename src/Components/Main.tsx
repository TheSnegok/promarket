import React from 'react'
import s from '../Styles/blocks/header.module.sass';
import logo from '../Image/logo.svg';
import mark from '../Image/Subtract.svg';
import loop from '../Image/search.svg'
import cabinet from '../Image/Group.svg'
import desire from '../Image/heart.svg'
import shoppingCart from '../Image/Cart.svg'

const Main = () => {
	return (
		<div className="container">
			<header className={s.header}>
				<div className={s.headerLogo}>
					<img src={logo} alt="logo" className={s.logo} />
				</div>
				<div className={s.headerLocation}>
					<img src={mark} alt="mark" className={s.mark} />
					<div className={s.regions}>Москва</div>
				</div>
				<div className={s.headerPhone}>
					<div className={s.number}>
						8 495 018-32-10
					</div>
					<div className={s.popup}>
					</div>
					<div className={s.phoneCall}>Заказать звонок</div>
				</div>
				<div className={s.headerMenu}>
					<div className={s.menuitem}>Оплата</div>
					<div className={s.menuitem}>Доставка</div>
					<div className={s.menuitem}>Поставщикам</div>
					<div className={s.menuitem}>Статьи</div>
					<div className={s.menuitem}>Контакты</div>
				</div>
			</header>
			<menu className={s.menu}>
				<div className={s.menuItems}>
					<div className={s.catalog}>
						<div className={s.burger}>
							<div className={s.line1}></div>
							<div className={s.line2}></div>
							<div className={s.line3}></div>
						</div>
						<div className={s.catalogText}>КАТАЛОГ ТОВАРОВ</div>
					</div>
					<div className={s.stonks}>
						<div className={s.stonksText}>АКЦИИ</div>
					</div>
					<div className={s.brands}>
						<div className={s.brandsText}>БРЕНДЫ</div>
					</div>
				</div>
				<div className={s.menuSearcher}>
					<input type="text" className={s.input} placeholder='Что вы ищете?' />
					<div className={s.icon}>
						<img src={loop} alt="search" className={s.loop} />
					</div>
				</div>
				<div className={s.menuActions}>
					<div className={s.cabinet}>
						<img src={cabinet} alt="cabinet" className={s.cabinetImg} />
					</div>
					<div className={s.desired}>
						<img src={desire} alt="desired" className={s.desiredImg} />
						{/* <div className={s.desiredAlert}>4</div> */}
					</div>
					<div className={s.shopping}>
						<img src={shoppingCart} alt="shoppingCart" className={s.shoppingImg} />
						{/* <div className={s.shoppingAlert}>2</div> */}
					</div>
				</div>
			</menu>
			<div className={s.banners}>
				<div className={s.bannersSlider}>
					<div className={s.sliderHeader}>
						СМЕСИТЕЛИ<br />
						RAIBER
					</div>
					<div className={s.sliderSubheader}>
						уже в наличии
					</div>
					<button className={s.sliderButton}>ПОДРОБНЕЕ</button>
					<div className={s.dots}>
						<div className={s.firstDot}></div>
						<div className={s.secondDot}></div>
						<div className={s.thirdDot}></div>
						<div className={s.fourthDot}></div>
						<div className={s.fivethDot}></div>
					</div>
					<div className={s.arrowLeft}>
						<div className={s.arrowLeftLineOne}></div>
						<div className={s.arrowLeftLineTwo}></div>
					</div>
					<div className={s.arrowRight}>
						<div className={s.arrowRightLineOne}></div>
						<div className={s.arrowRightLineTwo}></div>
					</div>
				</div>
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
			</div>
		</div>
	)
}

export default Main;