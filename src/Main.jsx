import React from 'react';
import FSection from './Components/Main Page/FirstSection';
import SSection from './Components/Main Page/SecondeSection';
import TSection from './Components/Main Page/ThirdSection';
import Footer from './Components/Main Page/FooterS';

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