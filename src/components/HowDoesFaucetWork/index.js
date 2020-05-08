import React from 'react';
import styled from 'styled-components';
import { Heading, Paragraph } from 'grommet';

import Grid from '../Grid';
import Column from '../Column';
import Container from '../Container';
import FullWidthContainer from '../FullWidthContainer';

import Radial_final_img from '../../images/Radial_final.svg';

export default function HowDoesFaucetWork() {
  return (
    <>
      <Container>
        <Grid noMargin pt='50px' align='start'>
          <Column gap='small'>
            <div>
              <Heading level={2} lined>
                {data.heading}
              </Heading>
              <Paragraph>{data.paragraph1}</Paragraph>
              <Paragraph margin={{ top: 'small' }}>{data.paragraph2}</Paragraph>
              <Paragraph margin={{ top: 'small' }}>{data.paragraph3}</Paragraph>
            </div>
          </Column>
        </Grid>
      </Container>

      <FullWidthContainer>
        <Grid noMargin pt='50px'>
          <Column mobileHide justifySelf="center">
            <Image src={Radial_final_img} />
          </Column>
          <Column tabletHide justifySelf='center'>
            <Image src={Radial_final_img} />
          </Column>
        </Grid>
      </FullWidthContainer>
    </>
  );
}

const data = {
  heading: 'How does the Centrifuge Chain faucet work?',
  paragraph1:
    'The Centrifuge Authenticated Faucet gives open access to business who want to use Centrifuge Chain. Though we will set-up and fund the faucet initially, users are then able to self-select for access to Radial tokens (RAD) that power Centrifuge Chain. This gives businesses the ability to transact on Centrifuge Chain without the permission of the Centrifuge team.',
  paragraph2:
    'A permissionless system, though open for any user to join and gain value, is also open for attackers - and especially vulnerable during a network’s initial phase. To support the growth of the ecosystem to a more secure and stable scale, users must login to Github to request funds from the Centrifuge faucet. This proof of identity is used to prevent Sybil attacks, deter spam, and to prevent bad actors from exhausting the faucet of funds. If you don’t have a Github account, reach out to us at chain@centrifuge.io to request funds.',
  paragraph3:
    'Owning RAD gives businesses a stake in the Centrifuge network and can be used to pay for transaction fees, stake towards validators, and participate in Centrifuge Chain governance. A single Github account can request up to 1 RAD per day from the faucet. This rate limit is utilized to prevent the accumulation of tokens to launch an attack against the network.'
};

const Image = styled.img`
  @media only screen and (max-width: 768px) {
    width: 30%;
    margin: 0 auto;
  }
`;
