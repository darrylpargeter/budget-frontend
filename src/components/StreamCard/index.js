import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {
  StreamCardWrapper,
  StreamCardTotal,
  StreamLink,
  StreamCardTotalItems,
  StreamCardItem,
} from './streamcards.styles';
import ListItems from '../ListItems/index';

const Item = ({ item }) => {
  return (
    <StreamCardItem>
      <p>{item.label}</p>
      <p>£{item?.value || item.price}</p>
    </StreamCardItem>
  );
};

const StreamCard = ({ data, title, dataKey, length, route }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const totalStreams = `${length} ${title}`;
  const totalValue = `£${data.total}`;

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <StreamCardWrapper
      area={title}
      onClick={handleOnClick}
      data-testid="stream-wrapper"
    >
      <StreamCardTotalItems data-testid="total-streams">
        {totalStreams}
      </StreamCardTotalItems>
      <StreamCardTotal data-testid="stream-total">{totalValue}</StreamCardTotal>
      {isOpen && (
        <ListItems items={data[dataKey.toLowerCase()]} keyPrefix={title}>
          <Item />
        </ListItems>
      )}
      <StreamLink data-testid="stream-link">
        <Link to={`/${route}`}>
          Add {title}
        </Link>
      </StreamLink>
    </StreamCardWrapper>
  );
};

StreamCard.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  dataKey: PropTypes.string,
  length: PropTypes.number,
  route: PropTypes.string,
}

export default StreamCard;
