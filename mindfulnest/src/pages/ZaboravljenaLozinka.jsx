import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContainer } from "../components/AuthContainer.jsx";
import useForm from "../hooks/useForm.jsx";

import "../styles/Pages.css";


export function ZaboravljenaLozinka() {
    const [formIsValid, setFormIsValid] = useState(false);
    const {
            values,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            } = useForm({
            initialFields: {
                email: "",
            },
            onSubmit: () => {
                console.log("Valid form:", values);
            }
        });

        useEffect(() => {
            const emailTrimmed = (values.email || "").trim();

            const emailFormatIsValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailTrimmed);
            const allFieldsFilled = emailTrimmed !== "";
            const noErrors = !errors.email;

            setFormIsValid(allFieldsFilled && emailFormatIsValid && noErrors);
        }, [values, errors]);

    return (
        <AuthContainer title={"Zaboravljena lozinka"}>
            <form className="formPages" onSubmit={handleSubmit}>
                <p className="pPages">Unesite svoju email adresu i poslaćemo ti link za resetovanje lozinke.</p>

                <input 
                type="email" 
                name="email"
                placeholder="Unesite svoju email adresu"
                className="inputPages"
                onBlur={handleBlur}
                onChange={handleChange}
                />
                {errors.email && <p className="errorPages">{errors.email}</p>}

                <button 
                className="buttonPages"
                disabled={!formIsValid}
                >
                    Pošalji link
                </button>

                <Link to={'/'} className="aPages">Nazad na prijavu</Link>
            </form>
        </AuthContainer>
    )
}