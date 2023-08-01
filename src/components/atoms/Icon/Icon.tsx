import {ICONS} from '../../../assets';

interface IconProps {
  name?: string;
  width?: string;
  height?: string;
}

export const Icon = ({
  name = 'logo-home',
  width = '100px',
  height = '100px',
}: IconProps) => {
  const Icon = ICONS[name];

  return <Icon style={{width, height: height}} />;
};
