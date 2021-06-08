import React from 'react';
import PropTypes from 'prop-types';
import ListItems from '../ListItems/index';
import Tag from './Tag';
import { Tags } from './tags.styles';

const TagFilter = ({ items, onFilterChange }) => {
  const [selected, setSelected] = React.useState(new Set());

  const handleOnClick = ({ target: { value } }) => {
    const copy = new Set(selected);
    const fn = selected.has(value) ? 'delete' : 'add';
    copy[fn](value)
    setSelected(copy);
  };

  const isSelected = (item) => selected.has(item);

  React.useEffect(() => {
    onFilterChange(Array.from(selected));
  }, [selected, onFilterChange]);

  return (
    <Tags>
      Filter: 
      <ListItems items={items} keyPrefix="tag-item">
        <Tag onClick={handleOnClick} isSelected={isSelected} />
      </ListItems>
    </Tags>
  );
}

TagFilter.propTypes = {
  items: PropTypes.array,
  onFilterChange: PropTypes.func,
};

export default TagFilter;
