import React from 'react'
import s from '../Styles/blocks/header.module.sass';
import logo from '../Image/logo.svg';
import mark from '../Image/Subtract.svg';
import loop from '../Image/search.svg';
import cabinet from '../Image/Group.svg';
import desire from '../Image/heart.svg';
import shoppingCart from '../Image/Cart.svg';
import car from '../Image/Car.svg';
import Shield from '../Image/Shield.svg';
import loader from '../Image/loader.svg';
import currency from '../Image/currency.svg';
import like from '../Image/like.png';
// img for block hits
import sink from '../Image/hits/image 1.png';
import bathroom from '../Image/hits/image 2.png';
import shower from '../Image/hits/image 3.png';
import toilet from '../Image/hits/image 4.png';
import heatedTowelRail from '../Image/hits/image 5.png';
import chat from '../Image/hits/messageLogo.svg';

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
			<section className={s.banners}>
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
			</section>
			<section className={s.icons}>
				<div className={s.iconsWrapper}>
					<div className={s.car}>
						<img src={car} alt="car" />
					</div>
					<div className={s.deskription}>
						Быстрая доставка<br />
						по Москве и в любой<br />
						регион России
					</div>
				</div>
				<div className={s.iconsWrapper}>
					<div className={s.Shield}>
						<img src={Shield} alt="shield" />
					</div>
					<div className={s.deskription}>
						Все товары имеют<br />
						официальную гарантию<br />
						производителя
					</div>
				</div>
				<div className={s.iconsWrapper}>
					<div className={s.loader}>
						<img src={loader} alt="loader" />
					</div>
					<div className={s.deskription}>
						Более 100 000 товаров
					</div>
				</div>
				<div className={s.iconsWrapper}>
					<div className={s.currency}>
						<img src={currency} alt="currency" />
					</div>
					<div className={s.deskription}>
						Любой способ оплаты
					</div>
				</div>
				<div className={s.iconsWrapper}>
					<div className={s.like}>
						<img src={like} alt="like" />
					</div>
					<div className={s.deskription}>
						Высокие оценки клиентов
					</div>
				</div>
			</section>
			<section className={s.collections}>
				<h1 className={s.collectionsHeader}>Коллекции плитки</h1>
				<div className={s.collectionsWrapper}>
					<div className={s.left}>
						<div className={s.leftHeader}>
							<h2>Сияние</h2>
						</div>
						<div className={s.leftDesckription}>
							Kerama Marazzi
						</div>
					</div>
					<div className={s.right}>
						<div className={s.rightUp}>
							<div className={s.rightUpLeft}>
								<div className={s.leftHeader}>
									Вестанвинд
								</div>
								<div className={s.leftDesckription}>
									LB-Ceramics
								</div>
							</div>
							<div className={s.rightUpRight}>
								<div className={s.rightHeader}>
									Rotterdam
								</div>
								<div className={s.rightDesckription}>
									Gracia Ceramica
								</div>
							</div>
						</div>
						<div className={s.rightBot}>
							<div className={s.rightBotLeft}>
								<div className={s.leftHeader}>
									Rane
								</div>
								<div className={s.leftDesckription}>
									Alma Ceramica
								</div>
							</div>
							<div className={s.rightBotRight}>
								<div className={s.rightHeader}>
									Гинардо
								</div>
								<div className={s.rightDesckription}>
									Kerama Marazzi
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={s.hits}>
				<h1 className={s.hitsHeader}>Коллекции плитки</h1>
				<div className={s.hitsMenu}>
					<div className={s.tag}>Любые товары</div>
					<div className={s.tag}>Раковины</div>
					<div className={s.tag}>Ванны</div>
					<div className={s.tag}>Унитазы</div>
					<div className={s.tag}>Душевые системы</div>
					<div className={s.tag}>Смесители</div>
					<div className={s.tag}>Зеркала</div>
					<div className={s.tag}>Душевые кабины</div>
					<div className={s.tag}>Стиральные машины</div>
				</div>
				<div className={s.hitsWrapper}>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.hot}>Хит</div>
							</div>
							<img src={sink} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsHalf}></span>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='28 601 ₽'>
								<span>2 601 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.hot}>Хит</div>
								<div className={s.tagTip}>Акция</div>
							</div>
							<img src={bathroom} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsHalf}></span>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='28 601 ₽'>
								<span>2 601 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.hot}>Хит</div>
							</div>
							<img src={shower} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsHalf}></span>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='28 601 ₽'>
								<span>2 601 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.hot}>Хит</div>
							</div>
							<img src={toilet} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsHalf}></span>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='28 601 ₽'>
								<span>2 601 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.hot}>Хит</div>
							</div>
							<img src={heatedTowelRail} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsFull}></span>
								</div>
								<div className={s.stars}>
									<span className={s.starsHalf}></span>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='28 601 ₽'>
								<span>2 601 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					{/* <div className={s.wrapperArrowRight}></div>
						<div className={s.wrapperArrowLeft}></div> */}
				</div>
			</section>
		</div>
	)
}

export default Main;