import {useState} from "react";
import {Link} from "react-router-dom";


export default function RegisterPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function register() {}


    return (
        <div>
            <form onSubmit={register}>
                <div>
                    <input value={username} onChange={ev => setUsername(ev.target.value)}/>
                </div>
                <div>
                    <input type={"password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
                </div>
                <button type={"submit"}>Register</button>
            </form>
        </div>
    )
}