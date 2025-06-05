import { FormContainer } from "../components/FormContainer.jsx";
import "../styles/FormPages.css";
import { PasswordInput } from "../components/PasswordInput.jsx";
import useForm from "../hooks/useForm.jsx";
import { login } from "../api/api.js";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export function Prijava() {
    const [formIsValid, setFormIsValid] = useState(false);
        const {
            values,
            errors,
            setErrors,
            handleChange,
            handleSubmit,
            handleBlur,
            } = useForm({
            initialFields: {
                email: "",
                password: "",
            },
            onSubmit: async () => {
            try {
                const response = await login({
                    email: values.email,
                    lozinka: values.password,
                });

                if (response.token) {
                        localStorage.setItem("token", response.token);
                        console.log("Login successful!");
                        // navigate("/home"); 
                    } else {
                        setErrors({
                            email: "Neispravan email ili lozinka.",
                            password: "Neispravan email ili lozinka.",
                        });    
                    }
                } catch (error) {
                    const errorMessage = error.response?.data?.message || "Došlo je do greške prilikom prijave.";
                    setErrors({
                        email: errorMessage,
                        password: errorMessage,
                    });
                }
            },

            });

        useEffect(() => {
            const allFieldsFilled =
                (values.email || "").trim() !== "" && (values.password || "").trim() !== "";

            setFormIsValid(allFieldsFilled);
        }, [values]);

    return (
        <FormContainer title={"Prijava"}>
            <form className={"formPages"} onSubmit={handleSubmit}>
                <div className="wrapperPages">
                    <input 
                    type="email" 
                    name="email"
                    value={values.email || ''}
                    className={"inputPages"} 
                    placeholder="Unesite svoju e-mail adresu"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="wrapperPages">
                    <PasswordInput 
                    name="password"
                    value={values.password || ''}
                    placeholder="Unesite svoju lozinku" 
                    className="inputPages inputLeft"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                    {errors.email && <span className="error">{errors.password}</span>}
                </div>

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

    