import s from "../../Styles/pages/ProfilePage.module.sass";
import cabinet from '../../public/Group.svg';
import camera from '../../public/CameraPhoto.svg';
import { useGlobalContext } from "../../Components/Context/Context";
import { FormEvent, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const ProfilePage = () => {

	const { profile, setProfile, setAuthentication } = useGlobalContext();
	const input = useRef<any>(null);

	const save = (e: FormEvent) => {
		e.preventDefault();
		if (input.current !== null) {
			setProfile({
				avatar: URL.createObjectURL(input.current.files[0]),
				name: profile.name,
				surname: profile.surname,
				phone: profile.phone,
				email: profile.email,
				password: profile.password
			});
		}
	}

	const logout = () => {
		setAuthentication({ authorization: false, email: '', password: '', key: '', rememberMe: false });
		localStorage.removeItem('rememberMe');
	}

	return (
		<section className={s.profilePage}>
			<div className={s.profilePageHeader}>
				<h1>Профиль</h1>
			</div>
			<form className={s.profilePageForm}>
				<div className={s.profilePageMain}>
					<div className={s.profilePageMainBlock}>
						<div className={s.profilePageMainBlockAva}>
							<div className={s.profilePageMainBlockAvaImg}>
								<Image src={profile.avatar === null ? cabinet : profile.avatar} alt="ava" layout="fill" />
							</div>
							<label htmlFor="ava">
								<div className={s.camera}>
									<Image src={camera} alt="camera" layout="fill" />
								</div>
								<span>Добавить фото</span>
							</label>
							<input type="file" id="ava" accept=".png, .jpg, .jpeg, .gif" ref={input} onChange={(e) => save(e)} />
						</div>
					</div>
					<div className={s.profilePageMainInfo}>
						<div className={s.profilePageMainInfoName}>
							<label htmlFor="name" >Ваше имя:</label>
							<input id="name" type="text" value={profile.name} onChange={(e) => setProfile({
								avatar: profile.avatar,
								name: e.target.value,
								surname: profile.surname,
								phone: profile.phone,
								email: profile.email,
								password: profile.password
							})} />
						</div>
						<div className={s.profilePageMainInfoSurname}>
							<label htmlFor="surname">Ваша фамилия:</label>
							<input id="surname" type="text" value={profile.surname} onChange={(e) => setProfile({
								avatar: profile.avatar,
								name: profile.name,
								surname: e.target.value,
								phone: profile.phone,
								email: profile.email,
								password: profile.password
							})} />
						</div>
						<div className={s.profilePageMainInfoNumber}>
							<label htmlFor="tel">Ваш телефон:</label>
							<input type="tel" id="tel" value={profile.phone} onChange={(e) => setProfile({
								avatar: profile.avatar,
								name: profile.name,
								surname: profile.surname,
								phone: e.target.value,
								email: profile.email,
								password: profile.password
							})} />
						</div>
						<div className={s.profilePageMainInfoEmail}>
							<label htmlFor="email">Новый емеил:</label>
							<input type="email" id="email" value={profile.email} onChange={(e) => setProfile({
								avatar: profile.avatar,
								name: profile.name,
								surname: profile.surname,
								phone: profile.phone,
								email: e.target.value,
								password: profile.password
							})} />
						</div>
						<div className={s.profilePageMainInfoPassword}>
							<label htmlFor="password">Новый пароль:</label>
							<input type="password" id="password" value={profile.password} onChange={(e) => setProfile({
								avatar: profile.avatar,
								name: profile.name,
								surname: profile.surname,
								phone: profile.phone,
								email: profile.email,
								password: e.target.value
							})} />
						</div>
					</div>
				</div>
				<button className={s.profilePageSave} onClick={(e) => save(e)}>Сохранить</button>
				<button className={s.profilePageExit} onClick={logout}>Выйти</button>
			</form>
		</section>
	)
}

export default ProfilePage;