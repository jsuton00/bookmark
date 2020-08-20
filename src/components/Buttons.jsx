import React, { useState } from 'react';
import { useEffect } from 'react';

export const LoginButton = () => {
  return (
    <button id="login-button" className="login-button" type="button">
      Login
    </button>
  );
};

export const GetItOnButtons = () => {
  const [clickedChrome, setClickedChrome] = useState(false);
  const [clickedFirefox, setClickedFirefox] = useState(false);

  useEffect(() => {
    clickedChrome &&
      window.open(
        'https://chrome.google.com/webstore/search/bookmark?hl=en-US',
        '_blank',
      );
    clickedFirefox &&
      window.open(
        'https://addons.mozilla.org/en-US/firefox/search/?q=bookmark&platform=WINNT&appver=79.0',
        '_blank',
      );
  });

  return (
    <>
      <button
        id="get-it-on-chrome"
        className="get-it-on-chrome"
        type="button"
        onClick={() => setClickedChrome(true)}
      >
        Get It on Chrome
      </button>
      <button
        id="get-it-on-firefox"
        className="get-it-on-firefox"
        type="button"
        onClick={() => setClickedFirefox(true)}
      >
        Get It on Firefox
      </button>
    </>
  );
};
