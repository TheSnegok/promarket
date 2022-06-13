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
                </div>
                <div className={s.profilePageMainInfo}>
                    <div className={s.profilePageMainInfoName}>
                        <label>Ваше имя:</label>
                        <input type="text" value="Max" />
                    </div>
                    <div className={s.profilePageMainInfoSecondname}>
                        <label>Ваша фамилия:</label>
                        <input type="text" value="Pfjsdof"/>
                    </div>
                    <div className={s.profilePageMainInfoNumber}>
                        <label>Ваш телефон:</label>
                        <input type="tel" name="" />
                    </div>
                    <div className={s.profilePageMainInfoPassword}>
                        <label>Ваш пароль:</label>
                        <input type="password" />
                    </div>

                </div>
            </div>
        </section>
    )
}