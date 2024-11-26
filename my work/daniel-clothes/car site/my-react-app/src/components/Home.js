// src/components/Home.js
import React from 'react';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">Pick Your Best Car</h1>
                    <h2 className="home__subtitle">Ferrari 458</h2>
                    <h3 className="home__elec">
                        <i className="ri-flashlight-fill"></i> RELENTLESS FORCE
                    </h3>
                </div>

                <img src="https://github.com/abdullahmoin/SuperCarWebsite/blob/main/public/assets/img/home.png?raw=true" alt="" className="home__img" />
                
                <div className="home__car">
                    <div className="home__car-data">
                        <div className="home__car-icon"><i className="ri-temp-cold-line"></i></div>
                        <h2 className="home__car-number">3.0s</h2>
                        <h3 className="home__car-name">0-100 km/h</h3>
                    </div>

                    <div className="home__car-data">
                        <div className="home__car-icon"><i className="ri-dashboard-2-line"></i></div>
                        <h2 className="home__car-number">419</h2>
                        <h3 className="home__car-name">POWER (KW)</h3>
                    </div>

                    <div className="home__car-data">
                        <div className="home__car-icon"><i className="ri-flashlight-fill"></i></div>
                        <h2 className="home__car-number">325 km/h</h2>
                        <h3 className="home__car-name">MAX. SPEED</h3>
                    </div>
                </div>

                <a href="#" className="home__button">START</a>
            </div>
        </section>
    );
};

export default Home;
