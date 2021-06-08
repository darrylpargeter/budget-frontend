import PropTypes from 'prop-types';
import { BudgetHeaderLayout } from './budget.styles';
import DatePicker from '../DatePicker/index';
import TagFilter from '../TagFilter/index';
import StreamCard from '../StreamCard/index';

import styled from "styled-components"

const IncomeCard = styled.h4`
  grid-area: incomes;
`;

const OverviewCard = styled.h4`
  grid-area: overview;
`;

const Header = ({ 
  incomes,
  tags,
  handleDateChange,
  handleFilterChange
}) => {
  return (
    <BudgetHeaderLayout>
      <StreamCard data={incomes} title="Incomes" route="incomes" />
      <DatePicker onDateChange={handleDateChange} />
      <OverviewCard>OverviewCard Placeholder</OverviewCard>
      <TagFilter items={tags} onFilterChange={handleFilterChange} />
    </BudgetHeaderLayout>
  );
};

Header.propTypes = {
  incomes: PropTypes.object,
  tags: PropTypes.array,
  handleDateChange: PropTypes.func,
  handleFilterChange: PropTypes.func,
};

export default Header;
