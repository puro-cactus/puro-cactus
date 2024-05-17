import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import './assets/css/index.css'
import './assets/css/App.css'
import './assets/css/Home.css'
import AboutUs from "./components/AboutUs.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <Route path="/about-us" component={AboutUs} />

        <>

            <Home/>
            <AboutUs/>


        </>

    </React.StrictMode>,
)
