import React from 'react';
import styled from 'styled-components';
import { Box, Paragraph, Text } from 'grommet';

import { List, Item } from '../List';
import { ExternalLink, InternalLink } from '../Links';

const FooterExternalLinkItem = ({ children, href, ...rest }) => (
  <FooterItem>
    <ExternalLink href={href} {...rest}>
      {children}
    </ExternalLink>
  </FooterItem>
);

const FooterLinkItem = ({ children, to, ...rest }) => (
  <FooterItem>
    <InternalLink to={to} {...rest}>
      {children}
    </InternalLink>
  </FooterItem>
);

const FooterItem = styled(Item)`
  margin-bottom: 8px;
`;

const BlockExternalLink = () => (
  <Item>
    <List>
      <Box justify="between">
        <Box>
          <FooterExternalLinkItem href="https://twitter.com/centrifuge">
            Twitter
          </FooterExternalLinkItem>
          <FooterExternalLinkItem href="https://medium.com/centrifuge">
            Medium
          </FooterExternalLinkItem>
          <FooterLinkItem to="/slack">Slack</FooterLinkItem>
          <FooterExternalLinkItem href="https://github.com/centrifuge/">
            GitHub
          </FooterExternalLinkItem>
          <FooterExternalLinkItem href="https://developer.centrifuge.io/">
            Documentation
          </FooterExternalLinkItem>
        </Box>
      </Box>
    </List>
  </Item>
);

const BlockInternalLink = () => (
  <Item>
    <List>
      <Box justify="between">
        <Box>
          <FooterExternalLinkItem href="https://ir.centrifuge.io/data-privacy-policy">
            Data Privacy Policy
          </FooterExternalLinkItem>
        </Box>
      </Box>
    </List>
  </Item>
);

const SubBlockContact = ({ title, email }) => (
  <Box direction="row" gap="xsmall" align="start">
    <Text weight="bold">{title}:</Text>
    <FooterExternalLinkItem href={`mailto:${email}`}>
      {email}
    </FooterExternalLinkItem>
  </Box>
);

const BlockHello = () => (
  <>
    <SubBlockContact title="General" email="hello@centrifuge.io" />
    <SubBlockContact title="Press, Events, Media" email="comms@centrifuge.io" />
    <SubBlockContact title="Partnerships" email="bizdev@centrifuge.io" />
  </>
);

const BlockCopyRight = () => (
  <Paragraph style={{ fontSize: 12 }}>
    Centrifuge Network Foundation © 2020
  </Paragraph>
);

export { BlockExternalLink, BlockInternalLink, BlockHello, BlockCopyRight };
