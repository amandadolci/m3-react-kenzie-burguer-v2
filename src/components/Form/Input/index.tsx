import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function InputComponent(
  { id, label, type, error, ...rest }: IInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div>
      <StyledInputContainer>
        <input type={type} id={id} placeholder=" " ref={ref} {...rest} />
        <label htmlFor={id}>{label}</label>
      </StyledInputContainer>
      <StyledParagraph fontColor="red">{error}</StyledParagraph>
    </div>
  );
}

export const Input = forwardRef(InputComponent);
