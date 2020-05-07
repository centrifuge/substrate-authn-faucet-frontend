import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import { Link } from 'gatsby';

const unstyledLinkStyles = css`
  color: inherit;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
    color : #2762FF;
    cursor: pointer;
  }

  &:active {
    /* opacity: 0.9; */
    color : #2762FF;
  }
`;


// export const StyledGatsbyLink = styled(Link)`
//   ${props => props.unstyled ? unstyledLinkStyles : ''}
// `;

export const StyledGatsbyLink = styled.a`
  ${props => props.unstyled && unstyledLinkStyles}
`;


const InternalLink = ({ children, unstyled, ...rest }) => (
  <StyledGatsbyLink unstyled={unstyled} {...rest}>
    {children}
  </StyledGatsbyLink>
);

InternalLink.defaultProps = {
  unstyled: 1
};

InternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  unstyled: PropTypes.number
};

export default InternalLink;
