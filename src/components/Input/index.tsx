import * as React from 'react';
import { InputElem } from './styles';

type Props = {
  name?: string;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  isSearch?: boolean;
  value?: string;
  checked?: boolean;
  onChange: (event: any) => void;
};

function Input(props: Props) {
    return (
      <InputElem
        disabled={props?.disabled}
        name={props?.name}
        onChange={props.onChange}
        placeholder={props?.placeholder}
        role="input"
        type={props?.type}
        value={props.value}
        checked={props?.checked}
      />
    );
}

export default Input;
