import React from "react"
import { FaFacebookF } from "react-icons/fa"


export default function FacebookLogin(props) {
   return(
       <div>
        <button className="facebook">
<FaFacebookF color="#fff"></FaFacebookF>
   <p>{props.action}</p>
</button>
<div className="div-or">
<p className="or">ou</p>
</div>
</div>
   )

}
