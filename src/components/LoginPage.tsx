import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../service/AuthService'

function LoginPage() {
    const navigate = useNavigate()
    function handleLogin() {

        let params = {
            "email" : "nadine@mail.com",
            "password" : "bestPassw0rd"
        }

        AuthService().login(params).then( (result) => {
            // wird ausgeführt wenn erfolgreich
            navigate("/cars", {replace : true})
        })
        .catch( error => {
            // wird ausgeführt bei fehler
        })

        
    }

  return (
    <>
        <div>LoginPage</div>
        {/* TODO add Login Form */}
        <Button onClick={handleLogin}>Login.</Button>
    </>
  )
}

export default LoginPage