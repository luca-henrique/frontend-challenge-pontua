/* eslint-disable @typescript-eslint/no-explicit-any */
import {InputHTMLAttributes} from 'react';
import {ContainerInput, ErrorMessage, Input, Container} from './style';
import {Control, Controller, FieldValues} from 'react-hook-form';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  errors?: string;
  control?: Control<FieldValues | any>;
}

export const InputText = ({
  name,
  control,
  type,
  placeholder,
  errors,
}: InputTextProps) => {
  console.log('errors', errors);

  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <Container>
          <ContainerInput>
            <Input
              value={value}
              onBlur={onBlur}
              type={type}
              onChange={onChange}
              placeholder={placeholder}
            />
          </ContainerInput>
          <ErrorMessage>{errors && errors}</ErrorMessage>
        </Container>
      )}
    />
  );
};
