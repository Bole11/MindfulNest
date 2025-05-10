import { AuthContainer } from "../components/AuthContainer.jsx";
import styles from "../styles/Prijava.module.css";
import { PasswordInput } from "../components/PasswordInput.jsx";
import { useFormValidation } from "../hooks/useFormValidation.jsx";
import { FormError } from "../components/FormError.jsx";

import { Link } from "react-router-dom";
import { useState } from "react";



export function Prijava() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { errors, validateField, touched} = useFormValidation();

    function handleInputChange(event) {
        const {name , value} = event.target;

        if (name === 'email') {
            setEmail(value);
        };
        if (name === 'password') {
            setPassword(value);
        }
    }
console.log("Errors:", errors);
    return (
        <AuthContainer title={"Prijava"}>
            <form className={styles.form}>
                <input 
                name="email"
                type="email" 
                className={styles.input} 
                placeholder="Unesite svoju e-mail adresu"
                onChange={handleInputChange}
                onBlur={() => validateField('email', email)}
                />
                <FormError error={touched.email && errors.email} />

                <PasswordInput 
                name="password"
                placeholder="Unesite svoju lozinku" 
                className={styles.input}
                onChange={handleInputChange}
                onBlur={() => validateField('password', password)}
                />
                <FormError error={touched.password && errors.password} />

                <button className={styles.button}>Prijavi se</button>

                <Link to={"/zaboravljenaLozinka"} className={styles.a}>Zaboravljena lozinka</Link>

                <span className={styles.span}>Nemaš nalog? <Link to={"/registracija"} className={styles.a}>Registruj se</Link></span>
            </form>
        </AuthContainer>
    )
}