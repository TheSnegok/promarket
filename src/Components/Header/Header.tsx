import { useRef, FC, useEffect, useState } from 'react'
import s from "./Header.module.sass"
import logo from '../../Image/logo.svg';
import mark from '../../Image/Subtract.svg';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/Context';

const Header: FC = () => {

	const regSpan = useRef<HTMLSpanElement | null>(null);

	const { data, callInput, setCallInput, region, setRegion } = useGlobalContext();

	const [call, setCall] = useState<boolean>(false);
	const [regList, setRegList] = useState<boolean>(false);

	return (
		<header className={s.header}>
			<div className={s.headerLogo}>
				<Link to={'/'}>
					<img src={logo} alt="logo" className={s.logo} />
				</Link>
			</div>
			<div className={s.headerLocation}>
				<img src={mark} alt="mark" className={s.mark} />
				<div className={s.regions}>
					<span onClick={() => setRegList(regList => !regList)} ref={regSpan}>{region}</span>
					<div className={regList ? s.regionsListVisible : s.regionsList}>
						<ul>
							{data.regionsList.map((item, index) => {
								return (
									<li key={index} onClick={() => setRegion(item)}>
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
					<div className={call ? s.popupDown : s.popup}>
					</div>
					<div className={s.phoneCall}>
						<span onClick={() => setCall(call => !call)}>Заказать звонок</span>
						<form action='/' className={call ? s.visiblePhoneCallInput : s.phoneCallInput}>
							<input type="text" pattern={'^([\u0401\u0451\u0410-\u044f]{1,20})'} title={'Ваше имя должно содержать от 2 букв до 24 букв!'} placeholder={'Введите ваше имя...'} value={callInput.name} onChange={e => setCallInput({ name: e.target.value, phone: callInput.phone })} />
							<input type="tel" pattern={'^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$'} title={`Введите настоящий номер телефона содержащий 10 цифр!`} placeholder={'Введите номер телофона...'} value={callInput.phone} onChange={e => setCallInput({ name: callInput.name, phone: e.target.value })} />
							<button>Заказать звонок</button>
						</form>
					</div>
				</div>
			</div>
			<div className={s.headerMenu}>
				<div className={s.menuitem}>
					<Link to={"/"}>
						Оплата
					</Link>
				</div>
				<div className={s.menuitem}>
					<Link to={"/"}>
						Доставка
					</Link>
				</div>
				<div className={s.menuitem}>
					<Link to={"/"}>
						Поставщикам
					</Link>
				</div>
				<div className={s.menuitem}>
					<Link to={"/"}>
						Статьи
					</Link>
				</div>
				<div className={s.menuitem}>
					<Link to={"/"}>
						Контакты
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header;