import { useRouter } from "next/router";
import { useRef } from "react";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage"
import s from "../../Styles/pages/Registration.module.sass";

const Registration = () => {

    const name = useRef(null);
    const secondName = useRef(null);
    const email = useRef(null);
    const pass = useRef(null);
    const router = useRouter();

    const registr = (e) => {
        e.preventDefault();
        if(name.current.value.length > 0 && secondName.current.value.length > 0 && email.current.value.length > 0 && pass.current.value.length > 0 ) {
            console.log(document.cookie);
        } else {
            console.error('Empty date!');
        }
    }

    return (
        <TypicalPage header="Регистрация">
            <div className={s.registration}>
                <fieldset>
                    <form onSubmit={(e) => registr(e)}>
                        <div className={s.registrationField}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" ref={name} />
                        </div>
                        <div className={s.registrationField}>
                            <label htmlFor="secondName">Second Name:</label>
                            <input type="text" name="secondName" ref={secondName} />
                        </div>
                        <div className={s.registrationField}>
                            <label htmlFor="email">E-mail:</label>
                            <input type="e-mail" name="email" ref={email} />
                        </div>
                        <div className={s.registrationField}>
                            <label htmlFor="pass">Password:</label>
                            <input type="pass" name="pass" ref={pass} />
                        </div>
                        <div className={s.registrationButton}>
                            <button type="submit">
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