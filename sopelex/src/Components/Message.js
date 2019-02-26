import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`color: ${props => props.color};`;

const Message = ({ text, color = "#c0392b" }) =>
  <Container>
    <Text color={color}>
      {text}
    </Text>
  </Container>;

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Message;
