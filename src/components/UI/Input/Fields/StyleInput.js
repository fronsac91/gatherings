import styled from 'styled-components';

export const InputElement = styled.input`
  display: block;
  width: 100%;
  vertical-align: top;
  border: solid 1.5px #e0e0e0;
  padding: 2px 4px;
  color: #B6B6B6;
  outline: none;

  &:focus {
    border-color: #35598e;
  }

  @media only screen and (min-width: 575px) {
    display: inline-block;
  }

  @media only screen and (min-width: 800px) {
    display: inline-block;
  }
`;

export const InputElementResized = styled(InputElement)`
    width: ${props => props.widthPercent}%;
    display: inline;
`;
