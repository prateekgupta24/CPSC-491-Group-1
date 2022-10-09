import React from 'react';
import Sub from '../styles/subscribe.style';

const subscribe = () => {
  return(
    <Sub>
      <div className="subscribe">
        <header className="subscribe-header">
        <h1>Subscribe:</h1>
        <p>1 month: $9.99</p>
        <p>3 months: $24.99 ($4.99 off)</p>
        <p>6 months: $49.99 ($9.99 off)</p>
        <p>12 months: $89.99 ($29.99 off)</p>
          </header>
          </div>
    </Sub>
  );
}

export default subscribe;