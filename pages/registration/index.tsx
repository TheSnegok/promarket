import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage"
import s from "../../Styles/pages/Registration.module.sass";

const Registration = () => {
    return (
        <TypicalPage header="Регистрация">
            <div className={s.registration}>
                <fieldset>
                    <form action="POST">
                        <div className={s.registrationField}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" />
                        </div>
                        <div className={s.registrationField}>
                            <label htmlFor="secondName">Second Name:</label>
                            <input type="text" name="secondName" />
                        </div>
                        <div className={s.registrationField}>
                            <label htmlFor="email">E-mail:</label>
                            <input type="e-mail" name="email" />
                        </div>
                        <div className={s.registrationField}>
                            <label htmlFor="pass">Password:</label>
                            <input type="pass" name="pass" />
                        </div>
                        <div className={s.registrationButton}>
                            <button>
                                <span>
                                    Зарегистрироваться
                                </span>
                            </button>
                        </div>
                    </form>
                </fieldset>
            </div>
        </TypicalPage>
    )
}

export default Registration;