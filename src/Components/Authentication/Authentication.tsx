import s from './Authentication.module.sass';

export const Authentication = () => {
    return (
        <section className={s.autentication}>
            <form action="" method="post" className={s.autenticationForm}>
                <div className={s.autenticationFormInputs}>
                    <input type="email" name="email" className={s.autenticationFormInputsEmail} placeholder="admin" required />
                    <input type="pass" name="password" className={s.autenticationFormInputsPassword} placeholder="admin" required />
                    <div className={s.autenticationFormInputsRemember}>
                        <input type="checkbox" name='rememberMe' />
                        <label htmlFor="rememberMe">Remember me?</label>
                    </div>
                </div>
                <div className={s.autenticationFormBtn}>
                    <button type="submit" className={s.autenticationFormBtnLogin}>Войти</button>
                    <button type="submit" className={s.autenticationFormBtnRegistration}>Зарегестрироватся</button>
                </div>
            </form>
        </section>
    )
}