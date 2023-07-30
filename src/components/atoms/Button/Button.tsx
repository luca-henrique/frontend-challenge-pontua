import {ICONS} from '../../../assets';
import {Container} from './style';

const signInIcon = ICONS['sign-in-icon'];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  type = 'button',
  icon,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <Container type={type} disabled={disabled} {...props}>
      {children}
      {icon && (
        <img
          src={signInIcon}
          style={{height: '13px', width: '13px', marginLeft: '9px'}}
        />
      )}
    </Container>
  );
};
