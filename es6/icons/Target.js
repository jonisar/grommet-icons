var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Target = function Target(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Target' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M23,12 C23,18.075 18.075,23 12,23 C5.925,23 1,18.075 1,12 C1,5.925 5.925,1 12,1 C18.075,1 23,5.925 23,12 L23,12 Z M18,12 C18,8.691 15.309,6 12,6 C8.691,6 6,8.691 6,12 C6,15.309 8.691,18 12,18 C15.309,18 18,15.309 18,12 L18,12 Z M13,12 C13,11.448 12.552,11 12,11 C11.448,11 11,11.448 11,12 C11,12.552 11.448,13 12,13 C12.552,13 13,12.552 13,12 L13,12 Z' })
      )
    )
  );
};

export default Target;