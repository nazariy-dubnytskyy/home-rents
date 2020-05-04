import * as React from 'react';

import { Wrapper } from './styles';

type ProgressBarProps = {
  value: number;
}

function ProgressBar(props: ProgressBarProps) {

  return (
    <Wrapper
      role="progressbar"
      value={props.value}
      aria-valuenow={props.value}
      aria-valuemin={0}
      aria-valuemax={100}
    ></Wrapper>
  );
}

ProgressBar.defaultProps = {
  value: 0
}

export default ProgressBar;