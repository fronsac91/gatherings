import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 70px;
  padding: 12px;
  border-top: 10px solid #1a3b67;
  background-color: #35598e;
`;

const Title = styled.h1`
  max-width: 800px;
  padding: 0 30px;
  color: white;
  font-size: 24px;
  font-weight: 10;

  @media only screen and (min-width: 575px) {
    width: 75%;
    margin: 0 auto;
  }
`;

const Header = (props) => {
  return(
    <HeaderContainer>
      <Title>
        {props.title}
      </Title>
    </HeaderContainer>
  );
}

export default Header;