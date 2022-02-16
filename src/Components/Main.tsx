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
		</div>
	)
}

export default Main;