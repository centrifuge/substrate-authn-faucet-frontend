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

const ExternalLink = ({ children, unstyled, ...rest }) => (
  <StyledLink
    unstyled={unstyled}
    rel="noopener noreferrer"
    target="_blank"
    {...rest}
  >
    {children}
  </StyledLink>
);

ExternalLink.defaultProps = {
  unstyled: 1
};

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  unstyled: PropTypes.number
};

export default ExternalLink;
