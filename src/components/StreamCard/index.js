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
      <p>£{item.value}</p>
    </StreamCardItem>
  );
};

const StreamCard = ({ data, title, route }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const totalStreams = `${data.incomes.length} ${title}`;
  const totalValue = `£${data.total}`;

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <StreamCardWrapper area={title} onClick={handleOnClick}>
      <StreamCardTotalItems>
        {totalStreams}
      </StreamCardTotalItems>
      <StreamCardTotal>{totalValue}</StreamCardTotal>
      {isOpen && (
        <ListItems items={data[title.toLowerCase()]} keyPrefix={title}>
          <Item />
        </ListItems>
      )}
      <StreamLink>
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
  route: PropTypes.string,
}

export default StreamCard;
