import s from '../../Styles/components/Callback.module.sass';

export const Callback = () => {
    return (
        <div className={s.callback}>
            <div className={s.callbackHeader}>
                <h4>Заполните форму ниже чтобы мы к вам передзвонили</h4>
            </div>
            <form>
                <div className={s.callbackInputs}>
                    <label htmlFor="name">Ваше имя:</label>
                    <input type="text" name="name" />
                    <label htmlFor="number">Ваш телефон:</label>
                    <input type="number" name="number" />
                </div>
                <div className={s.callbackButton}>
                    <button>Заказать звонок</button>
                </div>
            </form>
        </div>
    )
} 