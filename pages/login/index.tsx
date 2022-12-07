import { useRouter } from 'next/router';
import { FormEvent, useRef, useState } from 'react';
import TypicalPage from '~/../Components/Templates/TypicalPage/TypicalPage';
import { useGlobalContext } from '../../Components/Context/Context';
import s from '../../Styles/pages/Authentication.module.sass';

const Login = () => {

	const { authentication, setAuthentication } = useGlobalContext();

	const [invalid, setInvalid] = useState<boolean>(false);

	let router = useRouter();
	const rememberMe = useRef(null);

	const checkDate = (e: FormEvent) => {
		e.preventDefault();
		if (window.localStorage.getItem(authentication.email) === authentication.password) {
			setAuthentication({
				signIn: true,
				key: authentication.key,
				password: authentication.password,
				email: authentication.email,
				rememberMe: false
			})
			setInvalid(false);
			if (authentication.rememberMe && typeof window !== 'undefined') {
				localStorage.setItem('rememberMe', 'true');
			}
			router.push('/profile');
		} else {
			console.error('Invalid email or password!');
			setInvalid(true);
		}
	}

	const toogleCheck = () => {
		setAuthentication({
			signIn: authentication.signIn,
			key: authentication.key,
			password: authentication.password,
			email: authentication.email,
			rememberMe: !authentication.rememberMe
		})
	}

	return (
		<TypicalPage header='Вход'>
			<div className={s.autentication}>
				<form className={s.autenticationForm}>
					<div className={s.autenticationFormInputs}>
						<div className={s.autenticationFormInputsEmail}>
							<input
								type="email"
								name="email"
								placeholder="E-mail"
								value={authentication.email}
								onChange={(e) => setAuthentication(
									{
										signIn: authentication.signIn,
										key: authentication.key,
										password: authentication.password,
										email: e.target.value,
										rememberMe: false
									}
								)} required />
						</div>
						<div className={s.autenticationFormInputsPassword}>
							<input type="password" name="password" placeholder="Password" value={authentication.password} onChange={(e) => setAuthentication(
								{
									signIn: authentication.signIn,
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
						<div className={invalid ? s.autenticationFormInputsError : s.autenticationFormInputsHiden}>Invalid email or password(</div>
					</div>
					<div className={s.autenticationFormBtn}>
						<button type="submit" className={s.autenticationFormBtnLogin} onClick={(e) => checkDate(e)} >Войти</button>
						<button type="submit" className={s.autenticationFormBtnRegistration} onClick={(e) => { e.preventDefault; router.push('/registration'); }}>Зарегестрироватся</button>
					</div>
				</form>
			</div>
		</TypicalPage>
	)
}

export default Login;