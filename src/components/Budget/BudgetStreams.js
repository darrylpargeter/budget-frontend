import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'urql';
import StreamCard from '../StreamCard/index';
import ListItems from '../ListItems/index';
import { BudgetStreamsWrapper } from './budget.styles';

const StreamQuery = `
  query ($month: Int!, $year: Int!, $filter: [Int]) {
    streams(month: $month, year: $year, filter: $filter) {
      label
      total
      tag {
        id
      }
      items {
        label
        price(month: $month, year: $year)
      }
    }
  }
`;

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

  return (
    <BudgetStreamsWrapper>
      {
        data.streams.map((d, idx) => (
          <div>
            <StreamCard
              data={d} 
              title={d.label}
              length={d.items.length}
              route="streams"
              dataKey="items"
              key={`stream-${idx}`}
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
