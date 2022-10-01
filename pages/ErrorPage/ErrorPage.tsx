import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import s from './ErrorPage.module.sass';

export const ErrorPage = () => {

    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 1200);
    }, [navigate])

    return (
        <section className={s.errorPage}>
            <h3>Page not found!</h3>
        </section>
    )
}