import React from 'react';
import "./styles/SSection.css"
import Collabjpg from "./JPG/EditedCollab.jpg"
import Growthjpg from "./JPG/EditedGrowth.jpg"
import workHomejpg from "./JPG/EditedworkHome.jpg"
const SSection = () => {
    return (<>
        <section className='SSection' >
            <h2>
                Unlock  your potential with <span>Innovate</span>
            </h2>
            <div className='GridDisplay'>
                <div className='TextDiscript'>
                    <h3>
                        <span>Connect</span> with like-minded <span>professionals</span> and bring your ideas to life
                    </h3>
                    <p>
                        Whether you're a developer, marketer, or designer,
                        Innovate lets you team up with others to create something truly unique
                    </p>
                </div>
                <img src={Collabjpg} alt="" />
                <img src={Growthjpg} alt="" />
                <div className='TextDiscript'>
                    <h3>
                        <span>Discover</span> the next big thing and <span>invest</span> in promising startups from all over the world
                    </h3>
                    <p>
                        Our platform connects you with innovative ideas and passionate
                        founders who are looking to change the game
                    </p>
                </div>
                <div className='TextDiscript'>
                    <h3>
                        <span>Find</span> your dream <span>job</span> with Innovate
                    </h3>
                    <p>
                        Our platform lets you browse a wide range of openings from cutting-edge startups to established companies.
                    </p>
                </div>
                <img src={workHomejpg} alt="" />

            </div>
        </section>
    </>);
}

export default SSection;