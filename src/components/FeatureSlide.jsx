import React from 'react';
import simpleBookingmarking from '../assets/img/bg-img/illustration-features-tab-1.svg';
import speedySearching from '../assets/img/bg-img/illustration-features-tab-2.svg';
import easySharing from '../assets/img/bg-img/illustration-features-tab-3.svg';
import { MoreInfoButton } from './Buttons';

export const SimpleBookmarking = () => {
  return (
    <div id="simple-bookmark" className="features-tab row">
      <div className="simple-bookmark col-6">
        <div className="tab-content content-left">
          <img src={simpleBookingmarking} alt="Simple Bookmarking" />
        </div>
      </div>
      <div className="simple-bookmark col-6">
        <div className="tab-content content-right">
          <h4 className="tab-content-title row">Bookmark in one click</h4>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <MoreInfoButton />
        </div>
      </div>
    </div>
  );
};

export const SpeedySearching = () => {
  return (
    <div id="speedy-searching" className="features-tab row">
      <div className="speedy-searching col-6">
        <div className="tab-content content-left">
          <img src={speedySearching} alt="Speedy Searching" />
        </div>
      </div>
      <div className="speedy-searching col-6">
        <div className="tab-content content-right">
          <h4 className="tab-content-title row">Intelligent search</h4>
          <p>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to crawl through all of your bookmarks.
          </p>
        </div>
        <MoreInfoButton />
      </div>
    </div>
  );
};

export const EasySharing = () => {
  return (
    <div id="easy-sharing" className="features-tab row">
      <div className="easy-sharing col-6">
        <div className="tab-content content-left">
          <img src={easySharing} alt="Easy Sharing" />
        </div>
      </div>
      <div className="easy-sharing col-6">
        <div className="tab-content content-right">
          <h4 className="tab-content-title row">Share your bookmarks</h4>
          <p>
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
        </div>
        <MoreInfoButton />
      </div>
    </div>
  );
};
