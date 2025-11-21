import React from 'react';

export default function ReactWelcome() {
  return React.createElement(
    'h1',
    { style: { color: 'blue', fontSize: '24px', textAlign: 'center' } },
    'React is working!'
  );
}