import React from 'react';
import styled from 'styled-components';

const Limit = styled.div`
  position: relative;
  font-size: 11px;
  color: #B6B6B6;
`;

const LimitMessage = styled.p`
  width: 80%;
  display: inline-block;
`;

const LimitCounter = styled.p`
  width: 20%;
  display: inline-block;
  text-align: right;
`;

const CharLimit = (props) => {
  const { limitValue, value } = props;

  return (
    <Limit data-test="limit">
      <LimitMessage>The number of characters left:</LimitMessage>
      <LimitCounter>{limitValue-value.length}/{limitValue}</LimitCounter>
    </Limit>
  );
}

export default CharLimit;
