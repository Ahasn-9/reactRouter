import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams()
  return (
    <div style={{ 
      margin: '40px auto', 
      padding: '24px 32px', 
      maxWidth: '400px', 
      background: '#fff8f1', 
      borderRadius: '12px', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)' 
    }}>
      <h2 style={{ color: '#d97706', marginBottom: '8px' }}>User Profile</h2>
      <p style={{ fontSize: '1.2rem', color: '#333' }}>
        User: <span style={{ fontWeight: 'bold' }}>{userId}</span>
      </p>
    </div>
  )
}

export default User;
