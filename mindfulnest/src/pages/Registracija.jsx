import { AuthContainer } from "../components/AuthContainer.jsx";
import { PasswordInput } from "../components/PasswordInput.jsx";
import "../styles/Pages.css";


export function Registracija() {
    return (
        <AuthContainer title={"Registracija"}>
            <form className="formPages">
                <input 
                type="text" 
                placeholder="Ime i prezime" 
                className="inputPages"
                />

                <input 
                type="email" 
                placeholder="Email adresa"
                className="inputPages"
                />

                <PasswordInput 
                placeholder={"Lozinka"} 
                className="inputPages"
                />

                <PasswordInput 
                placeholder={"Potvrdi lozinku"} 
                className="inputPages"
                />

                <button className="buttonPages">Registruj se</button>

                <a className="aPages">Da li želiš da postaneš MindfulNest ekspert?</a>
            </form>
        </AuthContainer>
    )
}