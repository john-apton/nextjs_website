import React from 'react';

// constants
import { SVG_PROPS } from '@constants/common';

export default function Twitter(props: SVG_PROPS) {
  const { width = '16', height = '17', color = '#908EB5' } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.6 1.26855H15.0547L9.69333 7.39456L16 15.7319H11.0633L7.194 10.6766L2.77133 15.7319H0.312667L6.046 9.17789L0 1.26855H5.062L8.556 5.88922L12.6 1.26855ZM11.738 14.2646H13.0973L4.32133 2.65922H2.86133L11.738 14.2646Z'
        fill={color}
      />
    </svg>
  );
}
