import React from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

import config from '../../config';
import capitalize from '../../utils/capitalize';

// import styles
// import stylesMain from '../../styles';
import styles from './styles';
import SwipeableListItem from '../swipeable-list-item';

// return the big button component
const FoodListItem = function FoodListItem({
  food, date, quantity, quantityType, style, itemID, closeRow, deleteItem, innerRef, showExpiration,
}) {
  const quantityString = (quantityType === 'units') ? '' : quantityType;
  const expired = showExpiration && date.getTime() < new Date().getTime();

  return (
    <SwipeableListItem
      innerRef={innerRef}
      closeRow={closeRow}
      itemID={itemID}
      deleteItem={deleteItem}
      style={[
        style,
        { height: showExpiration ? 80 : 55 },
      ]}
      height={showExpiration ? 80 : 55}
    >
      <View style={styles.itemTextBox}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[styles.title, { width: '60%' }]}>{capitalize(food)}</Text>
          <Text style={styles.title}>{`${quantity} ${quantityString}`}</Text>
        </View>
        { showExpiration && (
          <Text style={[styles.expiration, expired ? { color: config.errorColor } : {}]}>
            {expired ? 'EXPIRED' : date.toLocaleDateString()}
          </Text>
        )}
      </View>
    </SwipeableListItem>
  );
};

FoodListItem.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  food: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  quantityType: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  itemID: PropTypes.number.isRequired,
  closeRow: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  innerRef: PropTypes.func.isRequired,
  showExpiration: PropTypes.bool.isRequired,
};

FoodListItem.defaultProps = {
  style: {},
};

export default FoodListItem;
