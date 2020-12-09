import React from "react"
import { Link } from "react-router-dom"

import "./styles.css";
import "../../components/form"
import Form from "../../components/form";
import Facebook from "../../components/FacebookLogin"

export default function Login() {
    return (
        <div className="container">
            <h1 style={{marginTop:100, fontSize:38}}>Scoutfy</h1>
            <div className="content">
            <section className="form">
              <Facebook action ="Entrar com o Facebook" ></Facebook>
              <Form></Form>
            </section>
            </div>
        </div>
    )
}