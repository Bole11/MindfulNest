import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormContainer } from "../components/FormContainer.jsx";
import useForm from "../hooks/useForm.jsx";
import { PasswordInput } from "../components/PasswordInput";

import "../styles/FormPages.css";


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
                password: "",
                confirmPassword: ""
            },
            onSubmit: () => {
                console.log("Valid form:", values);
            }
        });
        const [step, setStep] = useState(1);

        function handleNextStep() {
            setStep(prevStep => prevStep + 1);
        };

        useEffect(() => {
            if (step === 1) {
                const emailTrimmed = (values.email || "").trim();
                const emailFormatIsValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailTrimmed);
                const allFieldsFilled = emailTrimmed !== "";
                const noErrors = !errors.email;

                setFormIsValid(allFieldsFilled && emailFormatIsValid && noErrors);
            }

            if (step === 3) {
                const allFilled =
                values.password?.trim() &&
                values.confirmPassword?.trim();
                const noErrors =
                !errors.password &&
                !errors.confirmPassword;

                setFormIsValid(!!allFilled && noErrors);
            }
        }, [values, errors, step]);

        

    return (
        <FormContainer title={step === 1 || step === 2 ? 'Zaboravljena lozinka' : 'Reset lozinke'}>
            {step === 1 && (
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
                {errors.email && <p className="error">{errors.email}</p>}

                <button 
                type="button"
                className="buttonPages"
                disabled={!formIsValid}
                onClick={handleNextStep}
                >
                    Pošalji link
                </button>

                <Link to={'/'} className="aPages">Nazad na prijavu</Link>
            </form>
            )}

            {step === 2 && (
                <div className="step-confirmation">
                    <p className="pPages">Poslali smo kod na <strong>{values.email}</strong></p>
                    <button onClick={handleNextStep} className="buttonPages">Nastavi</button>
                </div>
            )}

            {step === 3 && (
                <form className="formPages" onSubmit={handleSubmit}>
                    <PasswordInput
                    name="password"
                    value={values.password || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Unesite novu lozinku"
                    className="inputPages"
                    />
                    {errors.password && (
                    <ul className="error-list">
                        {errors.password.map((msg, idx) => (
                        <li key={idx} className="error">{msg}</li>
                        ))}
                    </ul>
                    )}

                    <PasswordInput
                    name="confirmPassword"
                    value={values.confirmPassword || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Potvrdite novu lozinku"
                    className="inputPages"
                    />
                    {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                    )}

                    <button
                    type="submit"
                    className="buttonPages"
                    disabled={!formIsValid}
                    >
                    Sačuvaj novu lozinku
                    </button>
                </form>
            )}
        </FormContainer>
    )
}