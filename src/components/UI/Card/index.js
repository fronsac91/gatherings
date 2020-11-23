import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 24px 0;
  padding: 6px 24px;
  background-color: white;
  box-shadow: 0px 0px 2px 2px rgba(191,191,191,0.66);
`;

const CardHeader = styled.h2`
  margin: 12px 0;
  padding-bottom: 6px;
  color: #35598e;
  font-size: 20px;
  font-weight: 500;
  border-radius: 2px;
  border-bottom: 2px solid #D6D6D6;
`;

const CardBody = styled.div`
  
`;

const Card = (props) => {

  return (
    <CardContainer>
      <CardHeader>{props.title}</CardHeader>
      <CardBody>
        {props.children}        
      </CardBody>
    </CardContainer>
  );
}

export default Card;