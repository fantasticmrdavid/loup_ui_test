import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles';

const Template = ({ children }) => {
  const {
    Container,
    Content,
  } = styles;
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
