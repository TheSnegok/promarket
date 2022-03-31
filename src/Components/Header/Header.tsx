import { FC, useState } from 'react'
import s from "./Header.module.sass"
import logo from '../../Image/logo.svg';
import mark from '../../Image/Subtract.svg';

const regions = ["Київ", "Харків", "Запоріжжя", "Суми", "Чернігів", "Полтава", "Дніпропетровськ", "Кропівницький", "Херсон", "Миколаїв", "Черкаси", "Одесса", "Вінниця"];

const Header: FC = () => {

	const [city, setCity] = useState('Київ');

	return (
		<header className={s.header}>
			<div className={s.headerLogo}>
				<a href="/">
					<img src={logo} alt="logo" className={s.logo} />
				</a>
			</div>
			<div className={s.headerLocation}>
				<img src={mark} alt="mark" className={s.mark} />
				<div className={s.regions}>
					{city}
					<div className={s.regionsList}>
						<ul>
							{regions.map((item, index) => {
								return (
									<li key={index} onClick={() => setCity(item)}>{item}</li>
								)
							})}
						</ul>
					</div>
				</div>
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
				<div className={s.menuitem}><a href="/">Оплата</a></div>
				<div className={s.menuitem}><a href="/">Доставка</a></div>
				<div className={s.menuitem}><a href="/">Поставщикам</a></div>
				<div className={s.menuitem}><a href="/">Статьи</a></div>
				<div className={s.menuitem}><a href="/">Контакты</a></div>
			</div>
		</header>
	)
}

export default Header;