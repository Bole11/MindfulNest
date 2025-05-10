import { AuthContainer } from "../components/AuthContainer.jsx";
import styles from "../styles/Prijava.module.css";
import { PasswordInput } from "../components/PasswordInput.jsx";

import { Link } from "react-router-dom";
import { useState } from "react";


export function Prijava() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleInputChange(event) {
        const {type , value} = event.target;

        if (type === 'email') {
            setEmail(value);
        };
        if (type === 'password' || type === 'text') {
            setPassword(value);
        }
    }

    return (
        <AuthContainer title={"Prijava"}>
            <form className={styles.form}>
                <input 
                type="email" 
                className={styles.input} 
                placeholder="Unesite svoju e-mail adresu"
                onChange={handleInputChange}
                />

                <PasswordInput 
                placeholder="Unesite svoju lozinku" 
                className={styles.input}
                onChange={handleInputChange}
                />

                <button className={styles.button}>Prijavi se</button>

                <Link to={"/zaboravljenaLozinka"} className={styles.a}>Zaboravljena lozinka</Link>

                <span className={styles.span}>Nemaš nalog? <Link to={"/registracija"} className={styles.a}>Registruj se</Link></span>
            </form>
        </AuthContainer>
    )
}