var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Storage = function Storage(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Storage' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M3,24 L3,1 L21,1 L21,24 M9,6 L15,6 M9,16 L15,16 M3,11 L21,11 M3,21 L21,21' })
      )
    )
  );
};

export default Storage;