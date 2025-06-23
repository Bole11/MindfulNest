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
            if ("password" in fields && fields.confirmPassword !== fields.password) {
            newErrors.confirmPassword = "Lozinke se ne poklapaju";
        }
        };;

        if ("category" in fields) {
            if (!fields.category.trim()) {
                newErrors.category = "Kategorija je obavezna.";
            }
        };

        ["bio", "join"].forEach((field) => {
            if (field in fields) {
            const value = fields[field].trim();

            if (!value) {
                newErrors[field] = "Polje je obavezno.";
            } else if (value.length < 200) {
                newErrors[field] = "Polje mora imati najmanje 200 karaktera.";
            } else if (value.length > 500) {
                newErrors[field] = "Polje ne može imati više od 500 karaktera.";
            }
            }
        });

        if ("phone" in fields) {
            const phone = fields.phone.trim();

            if (!phone) {
                newErrors.phone = "Broj telefona je obavezan.";
            } else if (!/^\+?\d{8,15}$/.test(phone)) {
                newErrors.phone = "Unesite validan broj (min 8 cifara, može početi sa '+').";
            }
        };       

        if ("passwordLogin" in fields) {
            
        }

        
        return newErrors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));

        const fieldValidation = validate({ ...values, [name]: value });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: fieldValidation[name],
        }));
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;

        const singleField = { [name]: value };

        const fieldError = validate(singleField);

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
    setErrors,
    handleChange,
    handleSubmit,
    handleBlur,
  }
}
