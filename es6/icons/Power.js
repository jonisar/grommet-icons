var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Power = function Power(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Power' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M16,4 C19.3637732,5.43018182 22,8.98935065 22,13 C22,18.6008831 17.5273457,23 12,23 C6.47265429,23 2,18.6008831 2,13 C2,8.98935065 4.63622679,5.43018182 8,4 M12,1 L12,11' })
      )
    )
  );
};

export default Power;