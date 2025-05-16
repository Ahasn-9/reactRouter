import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/Ahasn-9')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                setData({ followers: 'Error' });
            });
    }, [])

    return (
        <div style={{ 
            margin: '40px auto', 
            padding: '24px 32px', 
            maxWidth: '400px', 
            background: '#fff8f1', 
            borderRadius: '12px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)' 
        }}>
            <h2 style={{ color: '#d97706', marginBottom: '8px' }}>Github Followers</h2>
            <p style={{ fontSize: '1.2rem', color: '#333' }}>
                Github Followers: {data ? data.followers : 'Loading...'}
            </p>
        </div>
    )
}

export default Github;
