import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

function MainPage() {

    const [username, setUsername] = useState("")
    const nav = useNavigate();

    const getUser = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("/api/users/" + username)
            .then(response => response.json())
            .then(() => nav("/repos/" + username))
    }

    return (
        <div>
            <form onSubmit={getUser}>
                <input type={"text"} value={username} onChange={event => setUsername(event.target.value) }/>
                <button type={"submit"}>send</button>
            </form>
        </div>
    );
}

export default MainPage;
