import { AuthContainer } from "../components/AuthContainer.jsx";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { PasswordInput } from "../components/PasswordInput.jsx";
=======
import useForm from "../hooks/useForm.jsx";
import { PasswordInput } from "../components/PasswordInput.jsx";

>>>>>>> Stashed changes
=======
import useForm from "../hooks/useForm.jsx";
import { PasswordInput } from "../components/PasswordInput.jsx";

>>>>>>> Stashed changes
import "../styles/Pages.css";


export function Registracija() {
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

    return (
        <AuthContainer title={"Registracija"}>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <form className="formPages">
                <input 
                type="text" 
                placeholder="Ime i prezime" 
                className="inputPages"
                />

                <input 
                type="email" 
                placeholder="Email adresa"
                className="inputPages"
                />

                <PasswordInput 
                placeholder={"Lozinka"} 
                className="inputPages"
                />

                <PasswordInput 
                placeholder={"Potvrdi lozinku"} 
                className="inputPages"
                />

                <button className="buttonPages">Registruj se</button>

                <a className="aPages">Da li želiš da postaneš MindfulNest ekspert?</a>
            </form>
=======
                <form onSubmit={handleSubmit} className={"formPages"}>
                    {/* Full Name */}
                    <div className="form-group">
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

=======
                <form onSubmit={handleSubmit} className={"formPages"}>
                    {/* Full Name */}
                    <div className="form-group">
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

>>>>>>> Stashed changes
                    {/* Email */}
                    <div className="form-group">
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
                    <div className="form-group">
                        <PasswordInput
                        name="password"
                        placeholder="Unesite lozinku"
                        value={values.password || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={"inputPages"}
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
                    <div className="form-group">
                        <PasswordInput
                        name="confirmPassword"
                        placeholder="Potvrdite lozinku"
                        value={values.confirmPassword || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={"inputPages"}
                        />
                        {errors.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                        )}
                    </div>

                    <button type="submit" className={"buttonPages"}>
                        Registruj se
                    </button>
                </form>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </AuthContainer>
    )
}