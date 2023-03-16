import React from 'react';
import FSection from './FirstSection';
import SSection from './SecondeSection';
import TSection from './ThirdSection';
import Footer from './FooterS';
import "./styles/Home.css"

const Main = () => {
    return (<>
        <main className='MainPage'>
            <FSection />
            <SSection />
            <TSection />
            <Footer />
        </main>

    </>);
}

export default Main;