import React, { forwardRef } from 'react';
import { Container, InputWrapper, Input, Label, EndValue } from './inputBoxStyle';
import { InputProps } from '../../types';

export const InputBox = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, label, placeholder, className, endValue, ...props }, ref) => (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputWrapper className={className}>
        <Input type={type} name={name} id={name} placeholder={placeholder} ref={ref} {...props} />
        {endValue && <EndValue>{endValue}</EndValue>}
      </InputWrapper>
    </Container>
  ),
);
InputBox.displayName = 'InputBox';
