import React, { useState } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";


const Registerpage = () => {
    const navigate = useNavigate();

    const [name, setemail] = useState('')
    const [password, setPassword] = useState('')

    return (
       
      <div className="app">
            <div className="login">
                <h2 className="title"> REGISTER     </h2>

                <div className="login_container">
                    <label className="input_label"> Username </label>
                    <input type="username" name="username" id="username" className='input_field' required
                    onChange={(us) => {
                        setemail(us.target.value);
                    }}
                    />
                </div>

                <div className="input_container">
                    <label className="input_label"> Password </label>
                    <input type="password" name="password" id="password" className='input_field' required 
                    onChange={(val) => {
                        setPassword(val.target.value)
                    }}
                    />
                </div>

                <div className="btn_div">
                    <button className="btn" onClick={() => {
                        // console.log("finalname", name);
                        // console.log("finalpassword", password);
                        localStorage.setItem("name", name);
                        localStorage.setItem("password", password)
                        
                    }}>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default Registerpage