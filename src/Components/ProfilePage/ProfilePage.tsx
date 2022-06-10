import s from "./ProfilePage.module.sass";

export const ProfilePage = () => {
    return (
        <section className={s.profilePage}>
            <div className={s.profilePageHeader}>
                Профиль
            </div>
            <div className={s.profilePageMain}>
                <div className={s.profilePageMainAva}>
                    <img src="" alt="ava" />
                </div>
                <div className={s.profilePageMainInfo}>
                    <div className={s.profilePageMainInfoName}>
                        <input type="text" value="Max" />
                    </div>
                    <div className={s.profilePageMainInfoSecondname}>
                        <input type="text" value="Pfjsdof"/>
                    </div>
                    <div className={s.profilePageMainInfoNumber}>
                        <input type="tel" name="" />
                    </div>
                    <div className={s.profilePageMainInfoPassword}>
                        <input type="password" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}