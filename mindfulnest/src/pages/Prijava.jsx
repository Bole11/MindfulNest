import { AuthContainer } from "../components/AuthContainer.jsx";
import styles from "../styles/Prijava.module.css"

export function Prijava() {
    return (
        <AuthContainer title={"Prijava"}>
            <form className={styles.form}>
                <input type="email" className={styles.input} placeholder="Unesite svoju e-mail adresu"/>
                <input type="password" className={styles.input} placeholder="Unesite svoju lozinku"/>
                <button className={styles.button}>Prijavi se</button>
                <a className={styles.a}>Zaboravljena lozinka</a>
                <span className={styles.span}>Nemaš nalog? <a className={styles.a}>Registruj se</a></span>
            </form>
        </AuthContainer>
    )
}