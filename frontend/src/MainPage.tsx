import React, { useState, useEffect } from 'react';

function MainPage() {

    const [username, setUsername] = useState("")


    const getUser = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("/api/users/" + username)
            .then(response => response.json())
            .then(body => {
                console.log(body)

            })
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
