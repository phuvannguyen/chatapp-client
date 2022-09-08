
import axios from "axios"

const REACT_APP_API_URL = "http://localhost:8080/api/";
const register  = (username, email, password) => {
    return axios.post(REACT_APP_API_URL + "registation" + "/", {
            username,
            password,
            email
        })
};

const login = (username, password) => {
    return axios.post(REACT_APP_API_URL + 'login' + "/", {
            username, password
      })

};

const logout = () => {
    return localStorage.removeItem("user")
}


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default AuthService;
