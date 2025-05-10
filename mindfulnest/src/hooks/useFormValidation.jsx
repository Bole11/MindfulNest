import { useState } from "react";

export function useFormValidation() {
    const [errors, setErrors] = useState({
        email: '',
        fullName: '',
        password: '',
        confirmPassword: '',
    });
    const [passwords, setPasswords] = useState(''); 
    const [touched, setTouched] = useState({});

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return 'Email is required';
        if (!regex.test(email)) return 'Invalid email format';
        return '';
    };

    const validateFullName = (fullName) => {
        if (!fullName) return 'Name is required';
        if (fullName.length < 2) return 'Name must be at least 3 characters';
        return '';
    };

    const validatePassword = (password) => {
        if (!password) return 'Password is required';

        const errorsPass = [];
        if (password.length < 8) errorsPass.push('at least 8 characters');
        if (!/[A-Z]/.test(password)) errorsPass.push('one uppercase letter');
        if (!/[a-z]/.test(password)) errorsPass.push('one lowercase letter');
        if (!/[0-9]/.test(password)) errorsPass.push('one number');
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errorsPass.push('must contain one special character');

        return (
            errors.length ? `Password must contain: ${errors.join(', ')}` : ''
        );
    };

    const validateConfirmPassword = (confirmPassword) => {
        if (!confirmPassword) return 'Please confirm your password';
        if (password !== confirmPassword) return 'Passwords do not match'
        return '';
    };

    const validateField = (fieldName, value) => {
        let error = '';
        switch (fieldName) {
        case 'email':
            error = validateEmail(value);
            break;
        case 'password':
            setPasswords(value);
            error = validatePassword(value);
            break;
        case 'name':
            error = validateFullName(value);
            break;
        case 'confirmPassword':
            error = validateConfirmPassword(value, passwords);
            break;
        default:
            break;
        }
        setErrors((prevErrors => ({ ...prevErrors, [fieldName]: error })));
        return error; 
    };

    const handleBlur = (fieldName, value) => {
        setTouched(prev => ({...prev, [fieldName]: true}));
        validateField(fieldName, value);
    }

  return { errors, validateField, touched, handleBlur };
    
}