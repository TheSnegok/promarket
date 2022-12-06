import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage"
import s from "../../Styles/pages/Registration.module.sass";

const Registration = () => {

    const button = useRef(null);
    const form = useRef(null);
    const router = useRouter();

    const buttonEvent = useCallback(e => {
        e.preventdefault();
        router.push('/login');
    }, []);

    useEffect(() => {
        if (button !== null) {
            button.current.addEventListener("onclick", buttonEvent);
        }
        return () => {
            button.current.removeEventListener("onclick", buttonEvent);
        }
    });

    return (
        <TypicalPage header="Регистрация">
            <div className={s.registration}>
                <fieldset>
                    <form action="POST" ref={form}>
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
                            <button type="submit" ref={button}>
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