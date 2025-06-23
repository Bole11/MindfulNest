import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FormContainer } from "../components/FormContainer.jsx";
import useForm from "../hooks/useForm.jsx";
import { PasswordInput } from "../components/PasswordInput";
import { requestPasswordReset, resetPassword } from "../api/api.js";

import "../styles/FormPages.css";


export function ZaboravljenaLozinka() {
    const [formIsValid, setFormIsValid] = useState(false);
    const [step, setStep] = useState(1);
    const handleNextStep = () => setStep((prev) => prev + 1);
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        } = useForm(
        {
            email: "",
            password: "",
            confirmPassword: ""
        },
        async (formValues) => {
            console.log("Form submitted at step:", step);

            if (step === 1) {
            await requestPasswordReset({ email: formValues.email });
            handleNextStep();
            }

            if (step === 3) {
            try {
                const response = await resetPassword({
                token: "test", // Replace with real token when ready
                novaLozinka: formValues.password,
                potvrdaLozinke: formValues.confirmPassword,
                });

                console.log("Reset successful:", response);
                handleNextStep();
            } catch (error) {
                console.error("Reset failed:", error);
                alert("Greška prilikom promene lozinke.");
            }
            }console.log("FORM VALUES:", formValues);

        }
    );

        const navigate = useNavigate();

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
                <div className="wrapperPages">    
                    <input 
                    type="email" 
                    name="email"
                    placeholder="Unesite svoju email adresu"
                    className="inputPages"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <button 
                type="submit"
                className="buttonPages"
                disabled={!formIsValid}
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
                    <div className="wrapperPages">
                        <PasswordInput
                        name="password"
                        value={values.password || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Unesite novu lozinku"
                        className="inputPages inputLeft"
                        />
                        {errors.password && (
                        <ul className="error-list">
                            {errors.password.map((msg, idx) => (
                            <li key={idx} className="error">{msg}</li>
                            ))}
                        </ul>
                        )}
                    </div>

                    <div className="wrapperPages">
                        <PasswordInput
                        name="confirmPassword"
                        value={values.confirmPassword || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Potvrdite novu lozinku"
                        className="inputPages inputLeft"
                        />
                        {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button
                    type="submit"
                    className="buttonPages"
                    disabled={!formIsValid}
                    >
                    Sačuvaj novu lozinku
                    </button>
                </form>
            )}

            {step === 4 && 
            <div className="step-confirmation">
                <p className="pPages">Lozinka je uspešno promenjena</p>
                <button className="buttonPages" onClick={() => navigate('/')}>Prijavi se</button>
            </div>
            }
        </FormContainer>
    )
}