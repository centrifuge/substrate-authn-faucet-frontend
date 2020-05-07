import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const unstyledLinkStyles = css`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
    color : #2762FF;
  }

  &:active {
    /* opacity: 0.9; */
    color : #2762FF;
  }
`;

const StyledLink = styled.a`
  ${props => props.unstyled && unstyledLinkStyles}
`;

const MailLink = ({ children, email, subject, body, bcc, cc, unstyled }) => (
  <StyledLink
    href={`mailto:${email}?subject=${subject}&body=${body}&cc=${cc.join(
      ','
    )}&bcc=${bcc.join(',')}`}
    unstyled={unstyled}
  >
    {children}
  </StyledLink>
);

MailLink.defaultProps = {
  subject: '',
  body: '',
  bcc: [],
  cc: [],
  unstyled: 1
};

MailLink.propTypes = {
  children: PropTypes.node.isRequired,
  email: PropTypes.string.isRequired,
  subject: PropTypes.string,
  body: PropTypes.string,
  bcc: PropTypes.array,
  cc: PropTypes.array
};

export default MailLink;
