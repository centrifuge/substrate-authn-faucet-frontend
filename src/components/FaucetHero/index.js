import React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph, Button } from 'grommet';
import { AxisTheme } from '@centrifuge/axis-theme';

import Grid from '../Grid';
import Column from '../Column';
import Medium2020_Faucet_img from '../../images/Medium2020_Faucet-19.svg';

export default function FaucetHero({ handleGithubLogin, stateError }) {
  return (
    <AxisTheme>
      <Grid noMargin pt="50px" pb="50px">
        <Column justifySelf='start' span={{ medium: 5, large: 5 }}>
          <Image src={Medium2020_Faucet_img} />
        </Column>

        <Column span={{ medium: 2, large: 2 }} />

        <Column span={{ medium: 5, large: 5 }}  textAlign="center" justifySelf="end" width="75%">
          <Content>
            <Heading margin={{ bottom: 'medium' }} level={3}>{data.heading}</Heading>
            <Paragraph margin={{ bottom: 'medium' }} pad={{ top: 'xxsmall', left: 'medium' }} size="xxlarge">{data.paragraph}</Paragraph>
            <Button margin={{ bottom: 'medium' }} primary label="Login with Github" onClick={handleGithubLogin}/>
            <Paragraph style={{ color: 'red' }} pad={{ top: 'xxsmall', left: 'medium' }}>{stateError}</Paragraph>
          </Content>
        </Column>
      </Grid>
    </AxisTheme>
  );
}

const data = {
  heading: 'Centrifuge Radial Faucet',
  paragraph:
    'Get Radial tokens to interact with Centrifuge Chain and unlock the value of your real-world assets in the decentralized finance ecosystem.'
};

const Content = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 33px;

    @media only screen and (max-width: 768px) {
      margin-bottom: 41px;
    }
  }f

  p {
    margin-top: 23px;
  }

  h1,
  p {
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;

const Image = styled.img`
  @media only screen and (max-width: 768px) {
    width: 30%;
    margin: 0 auto;
  }
`;
