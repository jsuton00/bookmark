import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export const MoreInfoButton = () => {
  return (
    <button
      id="btn-more-info"
      name="btn-more-info"
      type="button"
      className="more-info-button"
    >
      More Info
    </button>
  );
};

export const DownloadButton = (props) => {
  const { clickHandler } = props;

  return (
    <button
      id="btn-download"
      name="btn-download"
      type="button"
      className="btn-download"
      onClick={clickHandler}
    >
      {'Add & Install Extension'}
    </button>
  );
};

export const ToggleButton = (props) => {
  const { toggle } = props;
  return (
    <span className="btn-toggle" aria-label="Toggle FAQs">
      <FontAwesomeIcon icon={faAngleDown} flip={toggle} size="1x" />
    </span>
  );
};

export const ContactButton = (props) => {
  const { submitHandler } = props;
  return (
    <button
      id="btnSubmit"
      name="btnSubmit"
      type="button"
      className="btn-contact"
      onClick={submitHandler}
    >
      Contact Us
    </button>
  );
};
