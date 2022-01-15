import React from 'react'
import axios from "axios";

import './Logstyle.css'

import { useContext, useState } from "react";
import { useHistory, Redirect } from "react-router";

function Artistlog() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // const { token, handleToken } = useContext(AuthContext);
  
    const history = useHistory();

    return (
        <div className="login">

    <input className="input"
    type="text" name="email" placeholder="Enter Mobile/Email"  onChange={(e) => {
      setName(e.target.value);
    }}></input>


    <input className="input"
    type="text" name="email" placeholder="Enter Mobile/Email"  onChange={(e) => {
      setPassword(e.target.value);
    }}></input>
    
      <button
       className="button"
        onClick={() => {
          console.log(name, password);
          axios
            .post("https://reqres.in/api/login", {
              email: "eve.holt@reqres.in",
              password: "cityslicka",
            })
            .then(function (response) {
              console.log(response.data.token);
            //   handleToken(response.data.token);
              history.replace("./");
            })
            .catch(function (error) {
              console.log(error);
            });

          //  handleToken("123");
        }}
      >
        {" "}
        Submit
      </button>


  </div>
    )
}

export default Artistlog
