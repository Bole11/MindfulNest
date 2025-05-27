import { FormContainer } from "../components/FormContainer.jsx";
import { useState } from "react";
import useForm from "../hooks/useForm.jsx";
import useFormIsValid from "../hooks/useFormIsValid.jsx";
import heartCheck from "../images/heartCheck.png";

function RegistracijaEkspert() {
  const categories = [
    "Psihoterapija", 
    "Coaching i lični razvoj",
    "Mindfulness i meditacija", 
    "Telesna praksa i pokret",
    "Nutricionizam i ishrana"
    ];

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
  } = useForm(
    {
      fullName: "",
      email: "",
      phone: "",
      category: "",
      bio: "",
      join: ""
    },
    (formData) => {
      console.log("Form submitted:", formData);
    }
  );
  const requiredFields = ["fullName", "email", "phone", "category", "bio", "join"];
  const formIsValid = useFormIsValid(values, errors, requiredFields);
  const [step, setStep] = useState(1);

  function handleNextStep() {
    setStep(prevStep => prevStep + 1);
  };

  const handlePhoneChange = (event) => {
    const cleaned = event.target.value.replace(/[^0-9+ ]/g, "");
    handleChange({ target: { name: "phone", value: cleaned } });
  };
  
  return (
    <FormContainer title={step === 1 ? "Registracija" : ""}>
      {step === 1 && (
        <form className={"formPages"} onClick={handleSubmit}>
        <div className="wrapperPages">
          <input
            type="text"
            name="fullName"
            className="inputPages"
            placeholder="Ime i prezime"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>


        <div className="wrapperPages">
          <input
            type="email"
            name="email"
            className="inputPages"
            placeholder="Email adresa"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>


        <div className="wrapperPages">
          <input
            type="tel"
            name="phone"
            className="inputPages"
            placeholder="Broj telefona"
            value={values.phone}
            onChange={handlePhoneChange}
            onBlur={handleBlur}
          />
        {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="wrapperPages">
            <label htmlFor="category" className="labelPages" >Oblast stručnosti</label>
            <select
              name="category"
              className="selectPages"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="" disabled>Odaberi od ponuđenih opcija</option>
              {categories.map((category, index) => (
                <option key={index} value={category} className="optionPages">
                  {category}
                </option>
              ))}
            </select>
            {errors.category && <p className="error">{errors.category}</p>}
        </div>

        <div className="wrapperPages">
          <label htmlFor="bio" className="labelPages" >Kratka biografija</label>
          <textarea
            name="bio"
            className="textareaPages"
            placeholder="Kratka biografija"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.bio && <p className="error">{errors.bio}</p>}
        </div>

        <div className="wrapperPages">
          <label htmlFor="join" className="labelPages">Zašto želiš biti deo Mindfulnest?</label>
          <textarea 
            name="join" 
            className="textareaPages"
            placeholder="Unesite text ovde"
            value={values.join}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.join && <p className="error">{errors.join}</p>}
          </div>

          <button
          type="submit"
          className="buttonPages"
          disabled={!formIsValid}
          onClick={handleNextStep}
          >Registruj se</button>
      </form>
      )}

      {step === 2 && (
        <div className="wrapperPages middle">
          <img src={heartCheck} alt="" />
          <p>Hvala na prijavi!</p>
          <p>Kontaktiraćemo vas uskoro.</p>
          <button className="buttonPages">Početna strana</button>
        </div>
      )}
    </FormContainer>

  )
}

export default RegistracijaEkspert