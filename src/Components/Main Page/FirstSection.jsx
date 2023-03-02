import React from 'react';
import Logo from './Logo';
import "./styles/FSection.css"
import Circle from './Circles';
const FSection = () => {
    return (<>
        <section className='FSECTION'>
            <div className='navbar'>
                <div className='LogoDiv'>
                    <Logo width={150} height={35} />
                </div>
                <div className='div-links'>
                    <a href="/Aboutus">
                        About us
                    </a>
                    <a href="/Whyus">
                        Why Innovate
                    </a>
                    <a href="/Pricing">
                        Pricing
                    </a>
                    <a href="/New">
                        What's new
                    </a>
                </div>
                <div className='AccountSet'>
                    <a className="LogIn" href='/Login'>
                        Log In
                    </a>
                    <button className='Signup'>
                        Sign up
                    </button>
                </div>
            </div>
            <div className='HeadDiv'>
                <h1>
                    <span>Transform</span>  your <span>Ideas</span> with the best
                </h1>
            </div>
            <Circle classNumber="fCrcle" />
            <Circle classNumber="sCrcle" />
            <div className='DisplayMiddle'>
                <div className="GlassDiv FG"></div>
                <div className="GlassDiv SG"></div>
                <div className="GlassDiv TG"></div>

            </div>
        </section>
    </>);
}

export default FSection;