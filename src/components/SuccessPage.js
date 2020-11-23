import React from 'react';
import styled from 'styled-components';

const SuccessContainer = styled.div`
  font-size: 14px;
  max-width: 800px;
  margin: 24px 0;
  padding: 6px 36px;
  background-color: #effcf2;
  box-shadow: 0px 0px 2px 2px rgba(191,191,191,0.66);

  @media only screen and (min-width: 575px) {
    width: 75%;
    margin: 24px auto;
  }
`;

const SuccessHeader = styled.h2`
  margin: 12px 0;
  padding-bottom: 6px;
  color: #35598e;
  font-size: 20px;
  font-weight: 500;
  border-radius: 2px;
  border-bottom: 2px solid #D6D6D6;
`;

const SuccessBody = styled.p`
  margin: 24px 0;
`;

const SuccessPage = () => {
  return (
    <SuccessContainer>
      <SuccessHeader>Success</SuccessHeader>
      <SuccessBody>
        Event has been created     
      </SuccessBody>
    </SuccessContainer>
  );
}

export default SuccessPage;