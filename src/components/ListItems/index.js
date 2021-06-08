import React from 'react';
import PropTypes from 'prop-types';

const ListItems = ({ items, keyPrefix, children }) => {
  if (!Array.isArray(items)) {
    console.error('ListItems expects an Array of items');
    return null;
  }

  const itemsToRender = items.map((item, idx) => React.cloneElement(children, { item, key: `${keyPrefix}-${idx}` } ));

  return (
    <>
      {itemsToRender}
    </>
  )
};

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  keyPrefix: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
export default ListItems;
