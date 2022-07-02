import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../Context/Context';
import s from './Authentication.module.sass';

export const Authentication = () => {

	const { authentication, setAuthentication } = useGlobalContext();

	let redirect = useNavigate();
	const rememberMe = useRef(null);

	const checkDate = (e: FormEvent) => {
		e.preventDefault();
		if (authentication.email === 'admin@surge.sh' && authentication.password === 'admin') {
			setAuthentication({
				authorization: true,
				key: authentication.key,
				password: authentication.password,
				email: authentication.email,
				rememberMe: false
			})
			if(authentication.rememberMe) {
				localStorage.setItem('rememberMe', 'true')
			}
			redirect('/');
		} else {
			console.error('Invalid email or password!');
		}
	}

	const toogleCheck = () => {
		setAuthentication({
			authorization: authentication.authorization,
			key: authentication.key,
			password: authentication.password,
			email: authentication.email,
			rememberMe: !authentication.rememberMe
		})
	}

	return (
		<section className={s.autentication}>
			<form className={s.autenticationForm}>
				<div className={s.autenticationFormInputs}>
					<div className={s.autenticationFormInputsEmail}>
						<input
							type="email"
							name="email"
							placeholder="admin@surge.sh"
							value={authentication.email}
							onChange={(e) => setAuthentication(
								{
									authorization: authentication.authorization,
									key: authentication.key,
									password: authentication.password,
									email: e.target.value,
									rememberMe: false
								}
							)} required />
					</div>
					<div className={s.autenticationFormInputsPassword}>
						<input type="pass" name="password" placeholder="admin" value={authentication.password} onChange={(e) => setAuthentication(
							{
								authorization: authentication.authorization,
								key: authentication.key,
								password: e.target.value,
								email: authentication.email,
								rememberMe: false
							}
						)} required />
					</div>
					<div className={s.autenticationFormInputsRemember}>
						<input type="checkbox" name='rememberMe' checked={authentication.rememberMe} ref={rememberMe} onChange={() => toogleCheck()} />
						<label htmlFor="rememberMe">Remember me?</label>
					</div>
				</div>
				<div className={s.autenticationFormBtn}>
					<button type="submit" className={s.autenticationFormBtnLogin} onClick={(e) => checkDate(e)} >Войти</button>
					<button type="submit" className={s.autenticationFormBtnRegistration}>Зарегестрироватся</button>
				</div>
			</form>
		</section>
	)
}