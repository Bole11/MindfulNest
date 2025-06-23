import axios from "axios";

const API_BASE = "http://63.178.38.11:8080/MindfullNest";

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        "Content-Type": "Application/json"
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// registracija
export const register = async ({ imePrezime, email, lozinka, potvrdaLozinke }) => {
    const result = await api.post("/korisnici/registracija", {
        imePrezime,
        email,
        lozinka,
        potvrdaLozinke,
    });
    return result.data;
};
// prijava
export const login = async ({ email, lozinka }) => {
    const result = await api.post("/prijava", { 
        email, lozinka 
    });
    return result.data;
};
// odjava
export const logout = () => {
    localStorage.removeItem("token");
};
// forgot password step 1
export const requestPasswordReset = async ({ email }) => {
    const result = await api.post("/korisnici/zaboravljena-lozinka", {
        email
    });
    return result.data;
};
// forgot password step 2 - reset
export const resetPassword = async ({ token, novaLozinka, potvrdaLozinke }) => {
    const result = await api.put("/korisnici/zaboravljena-lozinka", {
        token,
        novaLozinka,
        potvrdaLozinke,
    });
    return result.data;
};
// update password
export const updatePassword = async ({ staraLozinka, novaLozinka, potvrdaLozinke }) => {
    const result = await api.put("/promena-lozinke", {
        staraLozinka,
        novaLozinka,
        potvrdaLozinke,
    });
    return result.data;
};
// update email
export const updateEmail = async ({ email }) => {
    const result = await api.put("/korisnici/promena/email", {
        email,
    });
    return result.data;
};
// update name
export const updateName = async ({ novoIme }) => {
    const result = await api.put("/korisnici/promena/ime", {
        novoIme,
    });
    return result.data;
};
// delete account
export const deleteAccount = async () => {
    const result = await api.delete("/korisnici/brisanje-naloga");
    return result.data;
};
// expert registracija
export const registerExpert = async ({ imePrezime, email, brojTelefona, struka, biografija, motiv }) => {
    const result = await api.post("/eksperti/konkurs", {
        imePrezime,
        email,
        brojTelefona,
        struka,
        biografija,
        motiv,
    });
    return result.data;
};
// Get list of experts
export const getExperts = async () => {
  const res = await api.get("/eksperti/lista");
  return res.data;
};
// Get expert profile by ID
export const getExpertProfileById = async ({ id }) => {
  const res = await api.get("/profil-eksperta/profil", { params: { id } });
  return res.data;
};
// Get expert profile by struka
export const getExpertProfileByProfession = async ({ struka }) => {
  const res = await api.get("/profil-eksperta/profil", { params: { struka} });
  return res.data;
};