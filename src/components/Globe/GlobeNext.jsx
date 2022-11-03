import React from 'react';

const GlobeNext = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_14_9)">
        <path
          d="M23.8535 11.6465L16.3535 4.1465C16.1582 3.95117 15.8418 3.95117 15.6465 4.1465C15.4512 4.34182 15.4512 4.65823 15.6465 4.85351L22.293 11.5L0.500016 11.5C0.223641 11.5 0 11.7237 0 12C0 12.2764 0.223641 12.5 0.500016 12.5L22.293 12.5L15.6465 19.1465C15.4512 19.3418 15.4512 19.6582 15.6465 19.8535C15.7441 19.9512 15.8721 20 16 20C16.128 20 16.2559 19.9512 16.3536 19.8535L23.8536 12.3535C24.0488 12.1582 24.0488 11.8418 23.8535 11.6465Z"
          //  fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_14_9">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlobeNext;
