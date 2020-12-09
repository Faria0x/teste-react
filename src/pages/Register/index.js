import React from "react"
import { FiMail } from "react-icons/fi"

import Facebook from "../../components/FacebookLogin"
import Email from "../../components/Email"

import "../Login/styles.css"
import { Link } from "react-router-dom"




export default function Register() {
    return (
            <div className="container">
            <h1 style={{marginTop:100, fontSize:38}}>Scoutfy</h1>
            <div className="content">
            <section className="form">
               <Facebook action="Cadastrar com o Facebook"></Facebook>
               <Email></Email>
            </section>
            <div className="already">
               
               <p>Já tem uma conta na Scoutfy?</p>
               <Link to="/">
               <button className="signIn">Entrar</button>
               </Link>
            </div>
            </div>
        </div>
   )   
}