import PropTypes from 'prop-types';
import { useQuery } from 'urql';
import { BudgetQuery } from '../../querys/index';

import { BudgetHeaderLayout } from './budget.styles';
import DatePicker from '../../components/DatePicker/index';
import TagFilter from '../../components/TagFilter/index';
import StreamCard from '../../components/StreamCard/index';

import styled from "styled-components"

const OverviewCard = styled.h4`
  grid-area: overview;
`;

const Header = ({ 
  handleDateChange,
  handleFilterChange
}) => {
  const [results] = useQuery({
    query: BudgetQuery,
  });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <BudgetHeaderLayout>
      <StreamCard
        data={data.incomes}
        title="Incomes"
        length={data.incomes.incomes.length}
        dataKey="incomes"
        route="incomes"
      />
      <DatePicker onDateChange={handleDateChange} />
      <OverviewCard>OverviewCard Placeholder</OverviewCard>
      <TagFilter items={data.tags} onFilterChange={handleFilterChange} />
    </BudgetHeaderLayout>
  );
};

Header.propTypes = {
  handleDateChange: PropTypes.func,
  handleFilterChange: PropTypes.func,
};

export default Header;
