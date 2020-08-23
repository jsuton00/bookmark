import React from 'react';
import hero from '../assets/img/bg-img/illustration-hero.svg';
import BrowserCards from '../components/BrowserCards';
import { GetItOnButtons } from '../components/Buttons';
import FeaturesTabs from '../components/FeaturesTabs';
import QuestionsAnswers from '../components/QuestionsAnswers';

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
          <FeaturesTabs />
        </div>
      </div>
      <div
        id="download-extensions-section"
        className="download-extensions-section row"
      >
        <div
          id="download-extensions-heading"
          className="download-extensions-heading col-12"
        >
          <h3>Download the extension</h3>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <div id="download-cards-row" className="download-cards-row">
          <BrowserCards />
        </div>
      </div>
      <div id="faq-section" className="faq-section row">
        <div className="faq-section-heading col-12">
          <h3>Frequently Asked Questions</h3>
          <p>
            Here are some of our FAQs. If you have any questions you'd like
            answered please feel free to email us.
          </p>
        </div>
        <div className="faq-section-row row">
          <QuestionsAnswers />
        </div>
      </div>
    </div>
  );
}
