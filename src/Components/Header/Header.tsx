import { FC, useState } from 'react'
import s from "./Header.module.sass"
import logo from '../../Image/logo.svg';
import mark from '../../Image/Subtract.svg';

const regions: string[] = ["Київ", "Харків", "Запоріжжя", "Суми", "Чернігів", "Полтава", "Дніпропетровськ", "Кропівницький", "Херсон", "Миколаїв", "Черкаси", "Одесса", "Вінниця"];

const Header: FC = () => {

	const [city, setCity] = useState<String>('Київ');

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
					<span>{city}</span>
					<div className={s.regionsList}>
						<ul>
							{regions.map((item, index) => {
								return (
									<li key={index} onClick={() => setCity(item)}>
										{item}
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
			<div className={s.headerPhone}>
				<div className={s.number}>
					<a href="tel:+84950183210">8 495 018-32-10</a>
				</div>
				<div className={s.call}>
					<div className={s.popup}>
					</div>
					<div className={s.phoneCall}>
						<span>Заказать звонок</span>
						<div className={s.phoneCallInput}>
							<input type="text" pattern={'^([\u0401\u0451\u0410-\u044f]{1,20})'} title={'Ваше имя должно содержать от 2 букв до 24 букв!'} placeholder={'Введите ваше имя...'} />
							<input type="tel" pattern={'^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$'} title={`Введите настоящий номер телефона содержащий 10 цифр!`} placeholder={'Введите номер телофона...'} />
							<button>Заказать звонок</button>
						</div>
					</div>
				</div>
			</div>
			<div className={s.headerMenu}>
				<div className={s.menuitem}>
					<a href="/">Оплата</a>
				</div>
				<div className={s.menuitem}>
					<a href="/">Доставка</a>
				</div>
				<div className={s.menuitem}>
					<a href="/">Поставщикам</a>
				</div>
				<div className={s.menuitem}>
					<a href="/">Статьи</a>
				</div>
				<div className={s.menuitem}>
					<a href="/">Контакты</a>
				</div>
			</div>
		</header>
	)
}

export default Header;