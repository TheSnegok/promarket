import s from "./ProfilePage.module.sass";
import cabinet from '../../Image/Group.svg';
import camera from '../../Image/CameraPhoto.svg';
import { useGlobalContext } from "../Context/Context";

export const ProfilePage = () => {

    const { authentication, setAuthentication } = useGlobalContext();

    return (
        <section className={s.profilePage}>
            <div className={s.profilePageHeader}>
                <h1>Профиль</h1>
            </div>
            <form className={s.profilePageForm}>
                <div className={s.profilePageMain}>
                    <div className={s.profilePageMainBlock}>
                        <div className={s.profilePageMainBlockAva}>
                            <img src={cabinet} alt="ava" className={s.profilePageMainBlockAvaImg} />
                            <label htmlFor="ava">
                                <img src={camera} alt="camera" />
                                <span>Добавить фото</span>
                            </label>
                            <input type="file" id="ava" />
                        </div>
                    </div>
                    <div className={s.profilePageMainInfo}>
                        <div className={s.profilePageMainInfoName}>
                            <label htmlFor="name" >Ваше имя:</label>
                            <input id="name" type="text" defaultValue="Max" />
                        </div>
                        <div className={s.profilePageMainInfoSurname}>
                            <label htmlFor="surname">Ваша фамилия:</label>
                            <input id="surname" type="text" defaultValue="Pfjsdof" />
                        </div>
                        <div className={s.profilePageMainInfoNumber}>
                            <label htmlFor="tel">Ваш телефон:</label>
                            <input type="tel" id="tel" />
                        </div>
                        <div className={s.profilePageMainInfoEmail}>
                            <label htmlFor="email">Ваш емеил:</label>
                            <input type="email" id="email" />
                        </div>
                        <div className={s.profilePageMainInfoPassword}>
                            <label htmlFor="password">Ваш пароль:</label>
                            <input type="password" id="password" />
                        </div>
                    </div>
                </div>
                <button className={s.profilePageSave}>Сохранить</button>
                <button className={s.profilePageSave} onClick={() => setAuthentication({ authorization: false, email: '', password: '', key: '' })}>Выйти</button>
            </form>
        </section>
    )
}