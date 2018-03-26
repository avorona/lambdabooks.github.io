import React from 'react';
import { Link, Image } from 'spectacle';

import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import medium from './assets/medium.svg';
import slack from './assets/slack.svg';
import github from './assets/github.svg';

import './Social.css';

const Social = () => (
  <div className="Social">
    <Link href="https://facebook.com/lambdabooks" target="_blank">
      <Image src={facebook} alt="facebook icon" width="32px"/>
    </Link>
    <Link href="https://twitter.com/LambdaBooks" target="_blank">
      <Image src={twitter} alt="twitter icon" width="32px"/>
    </Link>
    <Link href="https://medium.com/lambdabooks" target="_blank">
      <Image src={medium} alt="medium icon" width="32px"/>
    </Link>
    <Link href="http://slack.lambdabooks.com/" target="_blank">
      <Image src={slack} alt="slack icon" width="32px"/>
    </Link>
    <Link href="https://github.com/LambdaBooks" target="_blank">
      <Image src={github} alt="github icon" width="32px"/>
    </Link>
  </div>
);

export default Social;