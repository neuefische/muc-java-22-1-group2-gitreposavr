import React, { useState, useEffect } from 'react';

function App() {

    const [username, setUsername] = useState("")


    const getUser = () => {
        fetch("/api/users/" + username)
            .then(response => response.json())
            .then(body => {
                console.log(body)

            })
    }


    return (
        <div>
            <input type={"text"} value={username} onChange={event => setUsername(event.target.value) }/>
            <button onClick={getUser}>send</button>



        </div>
    );
}

export default App;
