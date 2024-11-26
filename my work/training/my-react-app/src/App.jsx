import React from 'react';
import './App.css';
const App = () => {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero__text">
          <h1>Push Your Limits</h1>
          <p>Hit milestones and PR’s by taking on a new challenge every month.</p>
          <button className="button">Join A Challenge</button>
        </div>
      </section>

      <section className="built">
  <div className="built__content">
    <div className="built__image">
      <img src="https://media.discordapp.net/attachments/1230603114680418397/1309970407708950559/image.png?ex=67438483&is=67423303&hm=83e9038fa3e0b3eeea6a2428d0bd7a3a7ac15ec391ea18a8c6eba1dd0850cf54&=&format=webp&quality=lossless&width=362&height=386" alt="Smarter Training" />
    </div>
    <div className="built__text">
      <h2 className="built__title">Built To Make You Better</h2>
      <div className="built__items">
        <div className="built__item">
          <h3>Smarter Training</h3>
          <p>
            Turn your phone or smartwatch into your coach — track your workouts and get tons of data and tips to help you run better.
          </p>
        </div>
        <div className="built__item">
          <h3>Custom Workouts</h3>
          <p>
            5K? Marathon? No matter where you’re at, get personalized Training Plans built just for you and your goals.
          </p>
        </div>
        <div className="built__item">
          <h3>Strong Community</h3>
          <p>
            Create your own custom challenges to push yourself and your friends. For extra motivation, reach out and find support from the entire UA MapMyRun™ community.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="stats-overview">
        <div className="stat-card">
        <img src="https://media.discordapp.net/attachments/1230603114680418397/1309968248254500884/image.png?ex=67438280&is=67423100&hm=2327ee7e43a0c049eed07f7859956d3eb1cdfc50a76abbef0f8375ab83ac2f20&=&format=webp&quality=lossless&width=57&height=51"></img>
          <div className="stat-card__value">9.42</div>
          <div className="stat-card__label">Miles Logged </div>
          <h2>(Billion)</h2>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">1.85</div>
          <div className="stat-card__label">Routes Created </div>
          <h2>(Billion)</h2>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">2.44</div>
          <div className="stat-card__label">Workouts Logged </div>
          <h2>(Billion)</h2>
        </div>
      </section>
    </div>
  );
};

export default App;
