import React, {useState} from 'react';
import Select, {components} from 'react-select';

import './style.css';
import MgIcon from './icon-example.svg';

//https://github.com/JedWatson/react-select

const countries = [
  {value: 'MG', label: 'Madagascar', icon: MgIcon},
  {value: 'UE', label: 'Union Européenne', icon: MgIcon},
];

const Option = (props: any) => (
  <components.Option {...props} className='country-option'>
    <img src={props.data.icon} alt='logo' className='country-logo' />
    {props.data.label}
  </components.Option>
);

export const CustomSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (value: any) => {
    setSelectedCountry(value);
  };

  const SingleValue = ({children, ...props}: any) => (
    <components.SingleValue {...props}>
      <img src={selectedCountry.icon} alt='s-logo' className='selected-logo' />
      {children}
    </components.SingleValue>
  );

  return (
    <Select
      value={selectedCountry}
      options={countries}
      onChange={handleChange}
      styles={{
        singleValue: (base) => ({
          ...base,
          display: 'flex',
          alignItems: 'center',
        }),
      }}
      components={{
        Option,
        SingleValue,
      }}
    />
  );
};
