import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import "./Sign.css";
import Logo from "../../Logo";

const SignUp = () => {
    const [Phone, setPhone] = useState("");
    const [FullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    return (
        <main className='MainSign'>
            <section className='Card'>
                <Logo width={250} height={50} />
                <div className='GeneralDiv'>
                    <div className="Infodiv">
                        <input
                            type="text"
                            id="Name"
                            placeholder='Enter your Full Name ...'
                            value={FullName}
                            onChange={(e) => setFullName(e.currentTarget.value)}
                        />
                        <div className='EmailorPhone'>
                            <input
                                type="email"
                                id="Email"
                                placeholder='Enter your Email adresse  ...'
                                value={Email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                            />
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter your phone number"
                                value={Phone}
                                onChange={(e) => setPhone(e.currentTarget.value)}
                            />
                        </div>
                        <input
                            type="password"
                            id="Password"
                            placeholder='Enter your password  ...'
                            value={Password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className='BtnsDiv'>
                    <button className='ContsubBTN'>
                        Continue Subscription
                    </button>
                    <hr />
                    <button className='GuestBTN'>
                        Continue as Guest
                    </button>
                </div>
                <p>
                    Already a Member ? <a> Sign in</a>
                </p>
            </section>
        </main >
    );
};

export default SignUp;
