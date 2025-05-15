import { AuthContainer } from "../components/AuthContainer.jsx";
import "../styles/Pages.css";
import { PasswordInput } from "../components/PasswordInput.jsx";

import { Link } from "react-router-dom";
import { useState } from "react";


export function Prijava() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
<<<<<<< Updated upstream

    function handleInputChange(event) {
        const {type , value} = event.target;

        if (type === 'email') {
            setEmail(value);
        };
        if (type === 'password' || type === 'text') {
            setPassword(value);
        }
    }

=======
    
>>>>>>> Stashed changes
    return (
        <AuthContainer title={"Prijava"}>
            <form className={"formPages"}>
                <input 
                type="email" 
                className={"inputPages"} 
                placeholder="Unesite svoju e-mail adresu"
<<<<<<< Updated upstream
                onChange={handleInputChange}
                />
=======
                />

>>>>>>> Stashed changes

                <PasswordInput 
                placeholder="Unesite svoju lozinku" 
<<<<<<< Updated upstream
                className={"inputPages"}
                onChange={handleInputChange}
=======
                className={styles.input}
>>>>>>> Stashed changes
                />

                <button className={"buttonPages"}>Prijavi se</button>

                <Link to={"/zaboravljenalozinka"} className={"aPages"}>Zaboravljena lozinka</Link>

                <span className={"spanPages"}>Nemaš nalog? <Link to={"/registracija"} className={"aPages"}>Registruj se</Link></span>
            </form>
        </AuthContainer>
    )
}