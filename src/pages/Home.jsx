import React from 'react';
import hero from '../assets/img/bg-img/illustration-hero.svg';
import { GetItOnButtons } from '../components/Buttons';

export default function Home() {
  return (
    <div id="main-content" className="main-content container-fluid">
      <div id="hero-section" className="hero-section row">
        <div className="hero-heading-section col-6">
          <div className="hero-content left">
            <div className="hero-text row">
              <h1>A Simple Bookmark Manager</h1>
              <p>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see how your sites load
                instantly. Try it for free!
              </p>
            </div>
            <div className="hero-buttons row">
              <GetItOnButtons />
            </div>
          </div>
        </div>
        <div className="hero-heading-section col-6">
          <div className="hero-content right">
            <img src={hero} alt="App's interface" />
          </div>
        </div>
      </div>
      <div id="features-section" className="features-section row">
        <div id="features-heading" className="features-heading col-12">
          <h3>Features</h3>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div id="features-section-tabs" className="features-section-tabs row">
          Features Tabs
        </div>
      </div>
      <div
        id="download-extensions-section"
        className="download-extensions-section row"
      >
        Download extensions section
      </div>
    </div>
  );
}
