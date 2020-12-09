import React from "react"

import "../pages/Login/styles.css"

export default function Form() {
    return(

        <div className="form">
        <form action="">
            <input placeholder="Email" type="text"/>
            <input placeholder="Password" type="password"/>
            <p>Esqueceu a senha?</p>
            <div className="submit">
            <button className="signIn">
            Entrar
            </button>
            </div>

        </form>
    </div>
    )
}