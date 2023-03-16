import React from 'react';
import "./styles/Home.css"
const TSection = () => {
    return (<>
        <section className='TSection'>
            <h3>
                <span>Join</span> our team and <span>be part</span> of something innovative
            </h3>
            <div className='JoiningDIV'>
                <div>
                    <h3>
                        Invest in the future
                    </h3>
                    <button>
                        Be Investor
                    </button>
                </div>
                <div className='S'>
                    <h3>
                        Bring your vision to life
                    </h3>
                    <button className='Sbtn'>
                        Be Innovator
                    </button>
                </div>
                <div>
                    <h3>
                        Turn your skills into success
                    </h3>
                    <button>
                        Be Worker
                    </button>
                </div>
            </div>
        </section>
    </>);
}

export default TSection;