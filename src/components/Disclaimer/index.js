import React from 'react';
import { Heading, Paragraph } from 'grommet';

import Grid from '../Grid';
import Column from '../Column';
import Container from '../Container';

export default function Disclaimer() {
  return (
    <Container>
      <Grid noMargin pt='50px' pb='50px' align='start'>
        <Column>
          <div>
            <Heading level={2}>
              {data.heading}
            </Heading>
            <hr />
            <Paragraph>{data.paragraphOne}</Paragraph>
            <br />
            <Paragraph>{data.paragraphTwo}</Paragraph>
          </div>
        </Column>
      </Grid>
    </Container>
  );
}

const data = {
  heading: 'Disclaimer',
  paragraphOne:
  'This faucet is provided on an "as-is" and "as available" basis. Accordingly, use of this faucet is at your own risk. To the maximum extent permitted by applicable law, the services are provided without warranties of any kind, whether express, implied, statutory or otherwise, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. Further, to the fullest extent allowed by applicable law, in no event shall the company or its affiliates, be liable to you or any third party for any damages of any kind.',
  paragraphTwo: 'When requesting funds from the faucet, we store the information you provide as well as the IP address you are connecting from. We share your IP address with MaxMind Inc. (https://www.maxmind.com/) .'
};
