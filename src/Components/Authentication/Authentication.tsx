import { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useGlobalContext } from '../Context/Context';
import s from './Authentication.module.sass';

export const Authentication = () => {

	const { authentication, setAuthentication } = useGlobalContext();

	let redirect = useNavigate();

	const checkDate = (e: FormEvent) => {
		e.preventDefault();
		if (authentication.email === 'admin@surge.sh' && authentication.password === 'admin') {
			setAuthentication({
				authorization: true,
				key: authentication.key,
				password: authentication.password,
				email: authentication.email
			})
			redirect('/');
		} else {
			console.error('Invalid email or password!');
		}
	}

	return (
		<section className={s.autentication}>
			<form className={s.autenticationForm}>
				<div className={s.autenticationFormInputs}>
					<input
						type="email"
						name="email"
						className={s.autenticationFormInputsEmail}
						placeholder="admin@surge.sh"
						value={authentication.email}
						onChange={(e) => setAuthentication(
							{
								authorization: authentication.authorization,
								key: authentication.key,
								password: authentication.password,
								email: e.target.value
							}
						)} required />
					<input type="pass" name="password" className={s.autenticationFormInputsPassword} placeholder="admin" value={authentication.password} onChange={(e) => setAuthentication(
						{
							authorization: authentication.authorization,
							key: authentication.key,
							password: e.target.value,
							email: authentication.email
						}
					)} required />
					<div className={s.autenticationFormInputsRemember}>
						<input type="checkbox" name='rememberMe' />
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