import { ButtonStyled } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <ButtonStyled type="button" onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
