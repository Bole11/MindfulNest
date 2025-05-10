import styles from "../styles/PasswordInput.module.css";

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";

export function PasswordInput({ placeholder, value, onChange, className }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={styles.passwordContainer}>
            <input
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${styles.input} ${className}`}
            />
            <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    )
}