import React from 'react';

import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import medium from './assets/medium.svg';
import slack from './assets/slack.svg';
import github from './assets/github.svg';

import './Social.css';

const Social = ({ }) => (
  <div className="Social">
    <a href="https://facebook.com/lambdabooks">
      <img src={facebook} alt="facebook icon" width="32px"/>
    </a>
    <a href="https://twitter.com/LambdaBooks">
      <img src={twitter} alt="twitter icon" width="32px"/>
    </a>
    <a href="https://medium.com/lambdabooks">
      <img src={medium} alt="medium icon" width="32px"/>
    </a>
    <a href="http://slack.lambdabooks.com/">
      <img src={slack} alt="slack icon" width="32px"/>
    </a>
    <a href="https://github.com/LambdaBooks">
      <img src={github} alt="github icon" width="32px"/>
    </a>
  </div>
);

export default Social;