import { StyledButton } from './Button.styled';

export const Button = ({ text, type, onClick, longButton = false }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      longButton={longButton ? true : false}
    >
      {text}
    </StyledButton>
  );
};
