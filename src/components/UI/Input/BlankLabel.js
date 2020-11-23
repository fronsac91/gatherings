import React from 'react';
import styled from 'styled-components';

const BlankLabelElement = styled.p`
  display: inline-block;
  margin-top: 3px;
  padding: 0 8px;
  width: ${props => props.widthPercent}%;
  color: #B6B6B6;

`;

const BlankLabel = ({ text, widthPercent }) => {
  return (
    <BlankLabelElement widthPercent={widthPercent}>
      { text }
    </BlankLabelElement>
  );
}

export default BlankLabel;
