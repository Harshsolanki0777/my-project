import React, { useState } from "react";
import './index.css';
import { useNavigate } from "react-router-dom"

const Loginpage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const n = localStorage.getItem("name")
    const p = localStorage.getItem("password")

    return (
        <div className="app">
            <div className="login">
                <h2 className="title"> LOGIN   </h2>

                <div className="login_container">
                    <label className="input_label"> Username </label>
                    <input type="username" name="username" id="username" className='input_field' required 
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    />
                </div>

                <div className="input_container">
                    <label className="input_label"> Password</label>
                    <input type="password" name="password" id="password" className='input_field' required  
                    onChange={(val) => {
                        setPassword(val.target.value)
                    }}
                    />
                </div>

                <div className="btn_div">
                    <button className="btn">Submit  </button>
                </div>

                <p>creat new accout <span onClick={() => {
                    navigate("/register")
                }}> register </span></p>

            </div>

        </div>
    )
}


export default Loginpage

