import React from "react"
import {FiMail} from "react-icons/fi"

export default function Email() {
    return(
        <button className="email">
            <FiMail size={20}></FiMail>
            <p>Cadastrar com o Email</p>
        </button>
    )
}