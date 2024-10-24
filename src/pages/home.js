import React, { useEffect, useState } from 'react';
import "./css/general.css"
import "./css/home.css"
import sponsorAWS from "./css/images/amazon.png"


const Home = () => {
    const [activeRoute, setActiveRoute] = useState('/');

    const handleNavigation = (route) => {
        window.location.href = route;
        setActiveRoute(route); // Update the active route
        console.log(`Navigating to ${route}`); 
    };

    const aboutClick = () => {
        //Go to about Page
        handleNavigation('/about')
    };

    const sponsorClick = () => {
        //Go to Sponsors page (to be added)
    };

    const loginClick = () => {
        //Go to Login Page
        handleNavigation('/login')
    };

    const helpClick = () => {
        //Go to Help Page (to be added)
    };

    return (
        <div className="home-container">

            <header>
                <h1>Welcome to Truck Driver Incentive Program!</h1>
                <p>Haul of Fame</p>
            </header>
            <main>
                <p className="home-description">The Truck Driver Incentive Program is a program by Haul of Fame that looks to reward good truck driving! Simply get rewards by driving save and effectively! You can use the below buttons or the naviagtion bar at the top to naviagte the website. You can check out our About Page, see our listed Sponsors, go to our Login page, or even just get help if you have any questions!</p>
            </main>

            <div className='home-button-section'>
                <button type="button" className='home-button' onClick={aboutClick}>
                    About Page</button>
                <button type="button" className='home-button' onClick={sponsorClick}>
                    Sponsor List</button>
                <button type="button" className='home-button' onClick={loginClick}>
                    Login</button>
                <button type="button" className='home-button' onClick={helpClick}>
                    Help</button>
            </div>

            <section className='sponsor-image-container'>
                Sponsors:
                <div className='sponsor-images-section'>
                    <img src={sponsorAWS} alt='Amazon Image' width='200'></img>
                    <img src={sponsorAWS} alt='Amazon Image' width='200'></img>
                    <img src={sponsorAWS} alt='Amazon Image' width='200'></img>
                    <img src={sponsorAWS} alt='Amazon Image' width='200'></img>
                </div>
            </section>

        </div>
    );
};

export default Home;