import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const ShoppingListImage = function ShoppingListImage({ width, height, style }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" style={style} width={width} height={height} viewBox="0 0 576 512">
      <Path fill="#000" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h52.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5h328c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zm152 512c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48z" />
    </Svg>
  );
};

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

ShoppingListImage.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

ShoppingListImage.defaultProps = {
  style: {},
};

export default ShoppingListImage;
