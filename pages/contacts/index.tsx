import s from "../../Styles/pages/ContactsPage.module.sass";

const ContactsPage = () => {
    return (
        <section className={s.contacts}>
            <h3>Контакты</h3>
            <div className={s.contactsWrapper}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3297237.6974906567!2d31.789171731576715!3d48.751907423508264!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1665599333811!5m2!1sru!2sua" width="600" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </section>
    )
}

export default ContactsPage;