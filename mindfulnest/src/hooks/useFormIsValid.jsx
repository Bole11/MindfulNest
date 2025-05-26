import { useState, useEffect } from "react";

function useFormIsValid(values, errors, requiredFields) {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const allFieldsFilled = requiredFields.every(
        (field) => values[field]?.trim() !== ""
        );

        const noErrors = requiredFields.every((field) => {
        const error = errors[field];
        return !error || (Array.isArray(error) && error.length === 0);
        });

        setIsValid(allFieldsFilled && noErrors);
    }, [values, errors, requiredFields]);

    return isValid;
}

export default useFormIsValid