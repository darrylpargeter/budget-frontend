import PropTypes from 'prop-types';
import { StreamCardWrapper } from './streamcards.styles';

const StreamCard = ({ data, title }) => {
  const totalStreams = `${data.incomes.length} ${title}`;
  return (
    <StreamCardWrapper area={title}>
      <h3>{totalStreams}</h3>
      <h2>{data.total}</h2>
      <div>temp</div>
    </StreamCardWrapper>
  );
};

StreamCard.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
}

export default StreamCard;
