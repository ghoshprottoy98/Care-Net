import axios from "axios";
import { MyContext } from "../Context";
import { useContext } from "react";

class AuthService {

    constructor() {
        this.baseURL = "http://localhost:8080/api/auth";
    }

    login = async (username, password) => {
        var reply = [];
        await axios.post(`${this.baseURL}/signin`, { username: username, password, password }).then((response) => {
            reply = [true, response];
        }).catch((error) => {
            reply = [false, error];
        });
        return reply;
    };

    signUp = async (user) => {
        var reply = [];
        await axios.post(`${this.baseURL}/signup`, user).then((response) => {
            reply = [true, response];
        }).catch((error) => {
            reply = [false, error]
        });
        return reply;
    };

    search = async (user, username) => {
        var reply = [];
        await axios.post(
            `${this.baseURL}/search`,
            { message: username },
            {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            }
        ).then((response) => {
            reply = [true, response];
        }).catch((error) => {
            reply = [false, error]
        });
        return reply;
    };

    searchPatient = async (user, username) => {
        var reply = [];
        await axios.post(
            `${this.baseURL}/patient/search`,
            { message: username },
            {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            }
        ).then((response) => {
            reply = [true, response];
        }).catch((error) => {
            reply = [false, error]
        });
        return reply;
    };

    searchDoctor = async (user, username) => {
        var reply = [];
        await axios.post(
            `${this.baseURL}/doctor/search`,
            { message: username },
            {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                },
            }
        ).then((response) => {
            reply = [true, response];
        }).catch((error) => {
            reply = [false, error]
        });
        return reply;
    };
}

export default AuthService;
