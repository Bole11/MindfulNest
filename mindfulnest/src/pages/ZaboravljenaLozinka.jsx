import { Link } from "react-router-dom";

import { AuthContainer } from "../components/AuthContainer.jsx";
import "../styles/Pages.css";


export function ZaboravljenaLozinka() {
    return (
        <AuthContainer title={"Zaboravljena lozinka"}>
            <form className="formPages">
                <p className="pPages">Unesite svoju email adresu i poslaćemo ti link za resetovanje lozinke.</p>

                <input 
                type="email" 
                placeholder="Unesite svoju email adresu"
                className="inputPages"
                />

                <button className="buttonPages">Pošalji link</button>

                <Link to={'/'} className="aPages">Nazad na prijavu</Link>
            </form>
        </AuthContainer>
    )
}