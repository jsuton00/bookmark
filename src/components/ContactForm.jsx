import React, { useState, useRef } from 'react';
import { ContactButton } from './Buttons';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [inputValue, setValue] = useState('');
  const [isValid, setValidity] = useState(false);
  const [error, setError] = useState('');

  const inputRef = useRef();
  const reGexPattern =
    '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/';

  const inputHandler = (e) => {
    return setValue(e.target.value);
  };

  const submitEmailHandler = (e) => {
    e.preventDefault();
    const input = e.target.ref;
    if (input === inputRef) {
      if (!e.target.value) {
        setError('No email! Please enter your email address.');
        e.preventDefault();
        e.stopPropagation();
      } else if (e.target.value !== e.target.pattern) {
        setError('Please enter a valid email address.');
        e.preventDefault();
        e.stopPropagation();
      } else {
        setValidity(!isValid);
        return setEmail(e.target.value);
      }
    }
  };

  return (
    <form
      id="contact-form"
      name="contact-form"
      className="contact-form form row"
    >
      <div id="input-section" className="input-section-row">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          className={`form-control ${isValid}` ? 'is-invalid' : 'is-valid'}
          pattern={reGexPattern}
          ref={inputRef}
          value={inputValue}
          onChange={inputHandler}
          required
        />
        {isValid ? (
          <span id="validation-message" className="validation-message">
            {error}
          </span>
        ) : (
          <span id="validation-message" className="validation-message">
            {`Thank you for contacting us. We will send to your email address: ${email}, as soon as possible.`}
          </span>
        )}
      </div>
      <div id="submit-button-section" className="submit-button-section row">
        <ContactButton clickHandler={submitEmailHandler} />
      </div>
    </form>
  );
}
