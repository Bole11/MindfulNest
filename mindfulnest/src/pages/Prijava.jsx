import { FormContainer } from "../components/FormContainer.jsx";
import "../styles/FormPages.css";
import { PasswordInput } from "../components/PasswordInput.jsx";
import useForm from "../hooks/useForm.jsx";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export function Prijava() {
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
                password: "",
            },
            onSubmit: () => {
                console.log("Valid form:", values);
            }
            });

        useEffect(() => {
            const allFieldsFilled =
                (values.email || "").trim() !== "" && (values.password || "").trim() !== "";

            setFormIsValid(allFieldsFilled);
        }, [values]);

    return (
        <FormContainer title={"Prijava"}>
            <form className={"formPages"} onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email"
                    value={values.email || ''}
                    className={"inputPages"} 
                    placeholder="Unesite svoju e-mail adresu"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <PasswordInput 
                    name="password"
                    value={values.password || ''}
                    placeholder="Unesite svoju lozinku" 
                    className={"inputPages"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <button 
                className={"buttonPages"}
                type="submit"
                disabled={!formIsValid}
                >
                    Prijavi se</button>

                <Link to={"/zaboravljenalozinka"} className={"aPages"}>Zaboravljena lozinka</Link>

                <span className={"spanPages"}>Nemaš nalog? <Link to={"/registracija"} className={"aPages"}>Registruj se</Link></span>
            </form>
        </FormContainer>
    )
}

    