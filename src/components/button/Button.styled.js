import styled from '@emotion/styled';

export const StyledButton = styled.button`
  ${props => (props.longButton ? 'width: 100%;' : '')}
  padding: 14px 50px;
  background-color: var(--button-bg-color);
  color: white;
  border: none;
  border-radius: 12px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: 0em;
  text-align: center;

  :hover,
  :focus {
    background-color: #0b44cd;
    cursor: pointer;
  }
`;
