import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage"
import s from "../../Styles/pages/Registration.module.sass";

const Registration = () => {

    const button = useRef(null);
    const name = useRef(null);
    const secondName = useRef(null);
    const email = useRef(null);
    const pass = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (button !== null && button.current !== null) {
            button.current.addEventListener("onsubmit", (e) => {
                e.preventDefault();
                console.log('i worked');
            });
        }
        // return () => {
        //     button.current.removeEventListener("submit", buttonEvent);
        // }
    });

    // useEffect(() => {
    //     if (button !== null && button.current !== null) {
    //         button.current.addEventListener("onclick", buttonEvent);
    //     }
    //     return () => {
    //         button.current.removeEventListener("onclick", buttonEvent);;
    //         removeEventListener
    //     }
    // });

    return (
        <TypicalPage header="Регистрация">
            <div className={s.registration}>
                <fieldset>
                    <form action="POST">
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