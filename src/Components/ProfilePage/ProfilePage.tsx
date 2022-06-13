import s from "./ProfilePage.module.sass";
import cabinet from '../../Image/Group.svg';

export const ProfilePage = () => {
    return (
        <section className={s.profilePage}>
            <div className={s.profilePageHeader}>
                <h1>Профиль</h1>
            </div>
            <div className={s.profilePageMain}>
                <div className={s.profilePageMainAva}>
                    <img src={cabinet} alt="ava" />
                    <input type="file" name="ava" />
                </div>
                <div className={s.profilePageMainInfo}>
                    <div className={s.profilePageMainInfoName}>
                        <label htmlFor="name" >Ваше имя:</label>
                        <input name="name" type="text" defaultValue="Max" />
                    </div>
                    <div className={s.profilePageMainInfoSurname}>
                        <label htmlFor="surname">Ваша фамилия:</label>
                        <input name="Surname" type="text" defaultValue="Pfjsdof"/>
                    </div>
                    <div className={s.profilePageMainInfoNumber}>
                        <label htmlFor="tel">Ваш телефон:</label>
                        <input type="tel" name="tel" />
                    </div>
                    <div className={s.profilePageMainInfoEmail}>
                        <label htmlFor="email">Ваш емеил:</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={s.profilePageMainInfoPassword}>
                        <label htmlFor="password">Ваш пароль:</label>
                        <input type="password" name="password"/>
                    </div>
                </div>
            </div>
            <button className={s.profilePageSave}>Сохранить</button>
        </section>
    )
}