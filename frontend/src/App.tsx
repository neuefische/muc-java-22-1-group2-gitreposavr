import React, { useState, useEffect } from 'react';

function App() {

    const [username, setUsername] = useState("")

    useEffect(() => {
        fetch("/api/users/Auamann")
            .then(response => response.json())
            .then(body => {
                console.log(body)
                setUsername(body.login)
            })
    },[])


    return (
        <div>
            {username}
        </div>
    );
}

export default App;
