import { useState } from "react";


export default function useForm(initialFields, onSubmit) {
    const [values, setValues] = useState(initialFields);
    const [errors, setErrors] = useState({});


    const validate = (fields) => {
        const newErrors = {};

        if ("fullName" in fields) {
            if (!fields.fullName.trim()) {
                newErrors.fullName = "Ime i prezime je obavezno.";
            } else if (fields.fullName.length < 2 || fields.fullName.length > 50) {
                newErrors.fullName = "Mora imati između 2 i 50 karaktera.";
            }
        };

        if ("email" in fields) {
            if (!fields.email.trim()) {
                newErrors.email = "Email je obavezan.";
            } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
                newErrors.email = "Unesite ispravan email.";
            }
        };

        if ("password" in fields) {
            const passwordErrors = [];
            const value = fields.password;

        if (!value) {
                passwordErrors.push("Lozinka je obavezna.");
            } else {
                if (value.length < 8) passwordErrors.push("Najmanje 8 karaktera.");
                if (!/[A-Z]/.test(value)) passwordErrors.push("Jedno veliko slovo.");
                if (!/[0-9]/.test(value)) passwordErrors.push("Jedan broj.");
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) passwordErrors.push("Jedan specijalni karakter.");
        }

        if (passwordErrors.length > 0) {
                newErrors.password = passwordErrors;
            }
        };

        if ("confirmPassword" in fields) {
            if (fields.confirmPassword !== fields.password) {
                newErrors.confirmPassword = "Lozinke se ne poklapaju.";
            }
        };

        return newErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        const fieldError = validate(values);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: fieldError[name],
        }));
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validate(values);
        setErrors(newErrors);

        const noErrors = Object.keys(newErrors).length === 0;
        if (noErrors && onSubmit) {
        onSubmit(values);
        }
    };
    


  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  }
}
