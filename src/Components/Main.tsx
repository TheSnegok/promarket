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
// img for block stock
import mixer from '../Image/stock/1 img.png';
import showerCabin from '../Image/stock/image 2.png';
import bathroomAcr from '../Image/stock/image 3.png';
import toilet2 from '../Image/stock/image 4.png';
import sink2 from '../Image/stock/image 5.png';
// img for block brands
import hansgrohe from '../Image/brands/image 17.png';
import grohe from '../Image/brands/image 16.png';
import stworki from '../Image/brands/image 18.png';
import ampm from '../Image/brands/image 19.png';
import jacot from '../Image/brands/image 20.png';
import cersanit from '../Image/brands/image 21.png';
import geberit from '../Image/brands/image 22.png';
import roca from '../Image/brands/image 23.png';
import vitra from '../Image/brands/image 24.png';
import villeroy from '../Image/brands/image 25.png';
import isideal from '../Image/brands/image 26.png';
import aquanika from '../Image/brands/image 27.png';
import benetto from '../Image/brands/image 28.png';
import colombo from '../Image/brands/image 29.png';
import dyson from '../Image/brands/image 30.png';
import goronje from '../Image/brands/image 31.png';
import jado from '../Image/brands/image 32.png';
import lvi from '../Image/brands/image 33.png';
// img for block article 
import article1 from '../Image/article/image 12.png'
import article2 from '../Image/article/image 13.png'
import article3 from '../Image/article/image 14.png'
import article4 from '../Image/article/image 15.png'
// img for block seo
import seoImg from '../Image/seoBlock.png'
// img for footer
import telegram from '../Image/logo/telegram 1.svg'
import instagram from '../Image/logo/instagram 2.svg'
import whatsApp from '../Image/logo/whatsApp.svg'
import yandex from '../Image/yandex.png'

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
					<div className={s.brand}>
						<div className={s.brandText}>БРЕНДЫ</div>
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
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Раковина Roca Debba 32799400Y, 60x48 см</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price}>
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
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>2</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Акриловая ванна AM.PM Bliss L 180х80 W53A-180-080W-ARB</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Германия</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='28 601 ₽'>
								<span>26 990 ₽</span>
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
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>24</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Душевая система Raiber R0808, хром</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Германия</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price}>
								<span>12 207 ₽</span>
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
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>4</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Унитаз AM.PM Spirit V2.0 C708607SC компакт с сиденьем микролифт</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price}>
								<span>14 764 ₽</span>
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
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>10</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Полотенцесушитель электрический Laris Кватро П7 40 x 60 см, 85 Вт, со...</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Россия, Украина</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} >
								<span>12 730 ₽</span>
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
			<section className={s.stock}>
				<h1 className={s.stockHeader}>Акции</h1>
				<div className={s.stockMenu}>
					<div className={s.tag}>Любые товары</div>
					<div className={s.tag}>Смесители</div>
					<div className={s.tag}>Полотенцесушители</div>
					<div className={s.tag}>Биде</div>
					<div className={s.tag}>Душевые системы</div>
					<div className={s.tag}>Ванны</div>
					<div className={s.tag}>Унитазы</div>
					<div className={s.tag}>Отопители</div>
					<div className={s.tag}>Посудомоечные машины</div>
				</div>
				<div className={s.stockWrapper}>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.tagTip}>Акция</div>
							</div>
							<img src={mixer} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Смеситель Hansgrohe Logis 71070000 для раковины</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='7 601 ₽'>
								<span>6 050 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.tagTip}>Акция</div>
							</div>
							<img src={showerCabin} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Душевая кабина Black&White Galaxy G8800, 80 x 110 см</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Германия</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='90 580 ₽'>
								<span>84 000 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.tagTip}>Акция</div>
							</div>
							<img src={bathroomAcr} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Ванна акриловая Am.Pm Spirit W72A-160L100W-A2, 160 x 100 см, левосторонняя</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Германия</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='36 900 ₽'>
								<span>29 990 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.tagTip}>Акция</div>
							</div>
							<img src={toilet2} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Унитаз Laguraty 8074 крышка микролифт, с функцией биде</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Испания</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='34 900 ₽'>
								<span>32 108 ₽</span>
							</div>
							<div className={s.buy}>
								<span>В КОРЗИНУ</span>
							</div>
						</div>
					</div>
					<div className={s.items}>
						<div className={s.itemsImg}>
							<div className={s.itemsImgTags}>
								<div className={s.tagTip}>Акция</div>
							</div>
							<img src={sink2} alt="firstItem" />
						</div>
						<div className={s.itemsStars}>
							<div className={s.starsWrapper}>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsFull}></div>
								</div>
								<div className={s.stars}>
									<div className={s.starsHalf}></div>
								</div>
							</div>
							<div className={s.message}>
								<img src={chat} alt="chat" />
								<span className={s.messageCount}>12</span>
							</div>
						</div>
						<div className={s.itemsDescription}>
							<span>Раковина Laufen Palace 120 см 8.1170.4.000.104.1</span>
						</div>
						<div className={s.itemsCountry}>
							<span>Швейцария</span>
						</div>
						<div className={s.itemsBuy}>
							<div className={s.price} data-diuscount='58 601 ₽'>
								<span>53 458 ₽</span>
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
			<section className={s.banner}>
				<div className={s.bannerWrapper}>
					<span>ЕЩЕ ОДИН БАННЕР</span>
				</div>
			</section>
			<section className={s.brands}>
				<h1 className={s.brandsHeader}>Популярные бренды</h1>
				<div className={s.brandsWrapper}>
					<div className={s.brandsLogo}><img src={hansgrohe} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={grohe} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={stworki} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={ampm} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={jacot} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={cersanit} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={geberit} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={roca} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={vitra} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={villeroy} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={isideal} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={aquanika} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={benetto} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={colombo} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={dyson} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={goronje} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={jado} alt="brand logo" /></div>
					<div className={s.brandsLogo}><img src={lvi} alt="brand logo" /></div>
				</div>
			</section>
			<section className={s.article}>
				<h1 className={s.articleHeader}>Статьи</h1>
				<div className={s.articleWrapper}>
					<article className={s.itemArticle}>
						<img src={article1} alt="article img" />
						<div className={s.itemArticleHeader}>
							<span>Актуальные и необычные аксессуары для ванной комнаты</span>
						</div>
					</article>
					<article className={s.itemArticle}>
						<img src={article2} alt="article img" />
						<div className={s.itemArticleHeader}>
							<span>Какой температуры должна быть горячая вода?</span>
						</div>
					</article>
					<article className={s.itemArticle}>
						<img src={article3} alt="article img" />
						<div className={s.itemArticleHeader}>
							<span>Конденсат на бачке унитаза: причины появления и способы устранения</span>
						</div>
					</article>
					<article className={s.itemArticle}>
						<img src={article4} alt="article img" />
						<div className={s.itemArticleHeader}>
							<span>Анаэробный герметик для резьбовых соединений</span>
						</div>
					</article>
					{/* <div className={s.wrapperArrowRight}></div>
						<div className={s.wrapperArrowLeft}></div> */}
				</div>
			</section>
			<section className={s.seo}>
				<div className={s.seoBlock}>
					<h2 className={s.seoBlockHeader}>Блок SEO-текста про магазин</h2>
					<span className={s.seoBlockText}>GG Promarket — крупный ритейлер сантехнического оборудования, плитки <br />
						и аксессуаров. Мы нацелены на то, чтобы сделать процесс выбора <br />
						и покупки сантехники максимально простым и интуитивно понятным. <br />
						При создании и обновлении сайта santehnika-online.ru мы продумали <br />
						логичную структуру каталога, организовали систему поиска, снабдили <br />
						карточки товаров подробными описаниями и характеристиками. <br />
						<br />
						Выбирать оборудование в нашем магазине легко даже тем, кто впервые<br />
						имеет дело с сантехникой. А уточнить детали и получить информацию<br />
						о совместимости товаров круглосуточно помогут опытные консультанты<br />
						нашего контакт-центра. С нами вы полюбите выбирать!</span>
				</div>
				<div className={s.seoImage}>
					<img src={seoImg} alt="seo img" />
				</div>
			</section>
			<footer className={s.footer}>
				<div className={s.footerSection}>
					<div className={s.footerSectionList}>
						<ul >
							<li>Плитка</li>
							<li>Сантехника</li>
							<li>Мебель для ванной</li>
							<li>Электроника и бытовая техника</li>
							<li>Отопление</li>
							<li>Напольное покрытие</li>
						</ul>
					</div>
					<div className={s.footerSectionLogo}>
						<img src={logo} alt="logo" className={s.logo} />
						<span>© 2020 <a href="/">ggpromarket.ru</a></span>
					</div>
				</div>
				<div className={s.footerMenu}>
					<div className={s.footerMenu}>
						<ul>
							<li>Оплата</li>
							<li>Доставка</li>
							<li>Поставщикам</li>
							<li>Статьи</li>
							<li>Контакты</li>
						</ul>
					</div>
				</div>
				<div className={s.footerContacts}>
					<div className={s.footerContactsPhone}>8 495 018-32-10</div>
					<div className={s.footerContactsButton}>
						<button><span>ЗАКАЗАТЬ ЗВОНОК</span></button>
					</div>
					<div className={s.footerContactsWorkshedule}>
						<span>Пн-Пт: 10:00 — 20:00</span>
						<span>Сб: 10:00 — 18:00</span>
						<span>Вс: выходной</span>
					</div>
					<div className={s.footerContactsSocial}>
						<div>
							<img src={whatsApp} alt="whatsApp" />
						</div>
						<div>
							<img src={instagram} alt="instagram" />
						</div>
						<div>
							<img src={telegram} alt="telegram" />
						</div>
					</div>
				</div>
				<div className={s.footerLocation}>
					<div className={s.footerLocationStreet}>
						<span>Склад:</span>
						<span>Москва, ул. Салтыковская, 6 стр 11</span>
						<span>zakaz@ggpromarket.ru</span>
					</div>
					<div className={s.footerLocationYandex}>
						<img src={yandex} alt="yandex" />
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Main;