import { FormContainer } from "../components/FormContainer.jsx";
import { PasswordInput } from "../components/PasswordInput.jsx";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm.jsx";
import { useEffect, useState } from "react";

import "../styles/FormPages.css";


export function Registracija() {
    const [formIsValid, setFormIsValid] = useState(false);
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useForm({
        initialFields: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
    },
    onSubmit: () => {
      console.log("Valid form:", values);
    }
  });

    useEffect(() => {
        const allFieldsFilled = 
            values.fullName?.trim() && 
            values.email?.trim() && 
            values.password?.trim() && 
            values.confirmPassword?.trim();

        const noErrors = 
            !errors.fullName && 
            !errors.email && 
            (!errors.password || errors.password.length === 0) && 
            !errors.confirmPassword;

        setFormIsValid(!!allFieldsFilled && noErrors);
    }, [values, errors]);

    return (
        <FormContainer title={"Registracija"}>
                <form onSubmit={handleSubmit} className={"formPages"}>
                    <div className="wrapperPages">
                        {/* Full Name */}
                        <input
                        type="text"
                        name="fullName"
                        placeholder="Unesite ime i prezime"
                        value={values.fullName || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={"inputPages"}
                        />
                        {errors.fullName && <p className="error">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div className="wrapperPages">
                        <input
                        type="email"
                        name="email"
                        placeholder="Unesite email adresu"
                        value={values.email || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={"inputPages"}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="wrapperPages">
                        <PasswordInput
                        name="password"
                        placeholder="Unesite lozinku"
                        value={values.password || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={"inputPages inputLeft"}
                        />
                        {errors.password && (
                        <ul className="error-list">
                            {errors.password.map((msg, idx) => (
                            <li key={idx} className="error">{msg}</li>
                            ))}
                        </ul>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="wrapperPages">
                        <PasswordInput
                        name="confirmPassword"
                        placeholder="Potvrdite lozinku"
                        value={values.confirmPassword || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={"inputPages inputLeft"}
                        />
                        {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button 
                    type="submit" 
                    className={"buttonPages"}
                    disabled={!formIsValid}
                    >
                        Registruj se
                    </button>

                    <Link className={"aPages"} to={'/registracijaekspert'}>Da li želiš da postaneš MindfulNest ekspert?</Link>
                </form>
            </FormContainer>
    )
}