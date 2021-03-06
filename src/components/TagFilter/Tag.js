import PropTypes from 'prop-types';
import { TagWrapper } from './tags.styles';

const Tag = ({ item, onClick, isSelected }) => {
  const selected = isSelected(item.id);

  return (
    <TagWrapper onClick={onClick} value={item.id} selected={selected} >
      {item.label}
    </TagWrapper>
  );
}

Tag.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  isSelected: PropTypes.func,
}

export default Tag;
