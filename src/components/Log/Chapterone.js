import React from 'react'
import  "./Logstyle.css"
import { Link } from "react-router-dom";

function Chapterone() {
    return (
        <div className="loginpopmain">

        <div className="login">
            <h3 className="log_h3">
                Choose your position</h3>
            <p className="loginpop_p">
                for a quicker checkout</p >

            <div className="button" ><Link to="/artistlog">Artist</Link></div>
            
            <div className="button" > <Link to="/player">Listner</Link></div>
                
        </div>
        </div>
    )
}

export default Chapterone
