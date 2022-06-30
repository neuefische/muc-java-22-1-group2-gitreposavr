import {FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {loginUser} from "../Services/apiServices";
import {LoginResponse} from "../models";


export default function LoginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const nav = useNavigate()

    function login(e: FormEvent) {
        e.preventDefault();

        loginUser(username, password)
            .then((response: LoginResponse) => localStorage.setItem('jwt', response.token))
            .then(() => nav("/main"))
    }


    return (
        <div>
            <form onSubmit={login}>
                <div>
                    <input value={username} onChange={ev => setUsername(ev.target.value)}/>
                </div>
                <div>
                    <input type={"password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
                </div>
                <button type={"submit"}>Login</button>
            </form>
            <Link to={"/register"}>Create an account</Link>
        </div>
    )
}