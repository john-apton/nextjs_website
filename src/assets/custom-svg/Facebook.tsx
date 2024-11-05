import React from 'react';

// constants
import { SVG_PROPS } from '@constants/common';

export default function Facebook(props: SVG_PROPS) {
  const { width = '9', height = '15', color = '#908EB5' } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 9 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.5 8.625H7.375L8.125 5.625H5.5V4.125C5.5 3.3525 5.5 2.625 7 2.625H8.125V0.105C7.8805 0.0727501 6.95725 0 5.98225 0C3.946 0 2.5 1.24275 2.5 3.525V5.625H0.25V8.625H2.5V15H5.5V8.625Z'
        fill={color}
      />
    </svg>
  );
}
