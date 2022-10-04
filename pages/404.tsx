import { useRouter } from 'next/router';
import { useEffect } from 'react';
import s from '../Styles/pages/ErrorPage.module.sass';

const ErrorPage = () => {

    let router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push('/'), 1200);
    }, [])

    return (
        <section className={s.errorPage}>
            <h3>Page not found!</h3>
        </section>
    )
}

export default ErrorPage;