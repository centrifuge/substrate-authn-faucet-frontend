import React from 'react';
import styled from 'styled-components';
import { Box, ResponsiveContext } from 'grommet';

import { List } from '../List';
import Container from '../Container';
import {
  BlockCopyRight,
  BlockExternalLink,
  BlockInternalLink,
} from './footer-item';

const FooterContent = styled(List)`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    > li {
      margin-bottom: 48px;
    }
    margin-bottom: 70px;
  }

  @media only screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr repeat(2, max-content);
    grid-gap: 48px;
  }

  @media only screen and (min-width: 1201px) {
    grid-gap: 64px;
  }
`;

const Footer = () => (
  <Box background="black" as="footer" pad={{ top: 'xlarge', bottom: 'large' }}>
    <Container>
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? (
            <FooterContent>
              <Box direction="row" gap="large">
                <BlockExternalLink />
                <BlockInternalLink />
              </Box>
              <BlockCopyRight size={size} />
            </FooterContent>
          ) : (
            <FooterContent>
              <Box>
                <BlockCopyRight size={size} />
              </Box>
              <BlockExternalLink />
              <BlockInternalLink />
            </FooterContent>
          )
        }
      </ResponsiveContext.Consumer>
    </Container>
  </Box>
);

export default Footer;
