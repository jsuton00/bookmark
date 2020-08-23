import React from 'react';
import chrome from '../assets/img/logos/logo-chrome.svg';
import firefox from '../assets/img/logos/logo-firefox.svg';
import opera from '../assets/img/logos/logo-opera.svg';
import { DownloadButton } from './Buttons';

export default function BrowserCards() {
  const installChrome = () => {
    window.open(
      'https://chrome.google.com/webstore/detail/teamsync-bookmarks/bcopfejjlalhckdkmofjciemgnjkffhj?hl=en-US',
      '_blank',
    );
  };

  const installFirefox = () => {
    window.open(
      'https://addons.mozilla.org/en-US/firefox/addon/webext-private-bookmarks/?src=search',
      '_blank',
    );
  };

  const installOpera = () => {
    window.open(
      'https://addons.opera.com/en/extensions/details/bookmarks-2/',
      '_blank',
    );
  };

  return (
    <div className="browser-card-deck card-deck row">
      <div
        id="browser-card-chrome"
        className="browser-card browser-card-chrome card"
      >
        <img
          src={chrome}
          alt="Install on Chrome"
          className="browser-card-img card-img-top"
        />

        <div className="browser-card-body card-body">
          <h5 className="browser-card-title card-title">Add to Chrome</h5>
          <p className="browser-card-text card-text">Minimum version 62</p>
        </div>
        <div className="browser-card-footer card-footer">
          <DownloadButton clickHandler={installChrome} />
        </div>
      </div>
      <div
        id="browser-card-firefox"
        className="browser-card browser-card-firefox card"
      >
        <img
          src={firefox}
          alt="Install on Firefox"
          className="browser-card-img card-img-top"
        />

        <div className="browser-card-body card-body">
          <h5 className="browser-card-title card-title">Add to Firefox</h5>
          <p className="browser-card-text card-text">Minimum version 55</p>
        </div>
        <div className="browser-card-footer card-footer">
          <DownloadButton clickHandler={installFirefox} />
        </div>
      </div>
      <div
        id="browser-card-opera"
        className="browser-card browser-card-opera card"
      >
        <img
          src={opera}
          alt="Install on Opera"
          className="browser-card-img card-img-top"
        />

        <div className="browser-card-body card-body">
          <h5 className="browser-card-title card-title">Add to Opera</h5>
          <p className="browser-card-text card-text">Minimum version 46</p>
        </div>
        <div className="browser-card-footer card-footer">
          <DownloadButton clickHandler={installOpera} />
        </div>
      </div>
    </div>
  );
}
