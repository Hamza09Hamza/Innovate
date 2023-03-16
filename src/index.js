import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Main from './Components/Main Page/Main';
// import SignUp from './Components/Sign up in/Signup';
// import ContSub from './Components/Sign up in/contSUB';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

reportWebVitals();