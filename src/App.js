import React, { Component } from 'react';
import {
  Deck, Slide, Text, Heading, Image
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import Social from './Social';

import logo from './assets/lambdabooks-logo.svg';

const colors = {
  primary: "#EAEFCF",
  secondary: "#3F344C",
};

const fonts = {
  primary: {
    name: 'Noto Sans',
    googleFont: true,
    styles: ['300', '700']
  },
  secondary: 'Helvetica'
};

const theme = createTheme(colors, fonts);

class App extends Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme} progress="none">
        <Slide>
          <Image src={logo} width="40%"/>
          <Heading textColor="secondary">LambdaBooks</Heading>
          <Social />
          {/* <Text textSize="1.5rem" textColor="secondary" style={{ opacity: 0.5 }}>
            Натисніть <em>Space</em>, щоб рухатись далі…
          </Text> */}
        </Slide>
      </Deck>
    );
  }
}

export default App;
