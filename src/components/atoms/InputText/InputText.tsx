/* eslint-disable @typescript-eslint/no-explicit-any */
import {InputHTMLAttributes} from 'react';
import {ContainerInput, ErrorMessage, Input, Container} from './style';
import {Control, Controller, FieldValues} from 'react-hook-form';
import {Icon} from '..';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  errors?: string;
  control?: Control<FieldValues | any>;
  iconName?: string;
}

export const InputText = ({
  name,
  control,
  type,
  placeholder,
  errors,
  iconName,
}: InputTextProps) => {
  const isPasswordIcon = type === 'password' && 'password-icon';
  const isEmailIcon = type === 'email' && 'email-icon';
  const isIconName = iconName ? iconName : '';

  const hasIcon = isPasswordIcon || isEmailIcon || isIconName;

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
            {hasIcon ? (
              <Icon width='17px' height='17px' name={hasIcon} />
            ) : (
              <></>
            )}
          </ContainerInput>
          <ErrorMessage>{errors && errors}</ErrorMessage>
        </Container>
      )}
    />
  );
};
