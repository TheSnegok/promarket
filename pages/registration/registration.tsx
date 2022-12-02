import TypicalPage from "~/../Components/Templates/TypicalPage/TypicalPage"
import s from "../../Styles/pages/Registration.module.sass";

export const Registration = () => {
    return(
        <TypicalPage header="Регистрация">
            <div className={s.registration}>
                <form action="POST">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    <label htmlFor="secondName">Second Name</label>
                    <input type="text" name="secondName" />
                    <label htmlFor="email">E-mail</label>
                    <input type="e-mail" name="email" />
                    <label htmlFor="pass">Password</label>
                    <input type="pass" name="pass" />
                    <button>Registration</button>
                </form>
            </div>
        </TypicalPage>
    )
}