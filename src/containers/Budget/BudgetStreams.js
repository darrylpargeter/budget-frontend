import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'urql';
import { StreamQuery } from '../../querys/index';
import StreamCard from '../../components/StreamCard/index';
// import ListItems from '../ListItems/index';
import { BudgetStreamsWrapper } from './budget.styles';

const BudgetStreams = ({ date, filter }) => {
  const variables = React.useMemo(() => ({
    month: date.month,
    year: date.year,
    filter,
  }), [date, filter]);

  const [results] = useQuery({
    query: StreamQuery,
    variables,
  });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  const numberOfRows = Math.ceil(data.streams.length / 4);

  return (
    <BudgetStreamsWrapper rows={numberOfRows}>
      {
        data.streams.map((d, idx) => (
          <div key={`streams-${idx}`}>
            <StreamCard
              data={d} 
              title={d.label}
              length={d.items.length}
              route="streams"
              dataKey="items"
            />
          </div>
        ))
      }
    </BudgetStreamsWrapper>
  );
}

BudgetStreams.propTypes = {
  date: PropTypes.object,
  filter: PropTypes.arrayOf(PropTypes.number),
};

export default BudgetStreams;
