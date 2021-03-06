import React from 'react';
import { getMonth, getYear } from 'date-fns';
import BudgetStreams from './BudgetStreams';
import BudgetHeader from './BudgetHeader';
import { BudgetWrapper } from './budget.styles';

const initState = {
  month: getMonth(new Date()),
  year: getYear(new Date())
}

const Budget = () => {
  const [date, setDate] = React.useState(initState);
  const [tagFilter, setTagFilter] = React.useState();

  const handleDateChange = React.useCallback((payload) => {
    setDate(payload);
  }, []);

  const handleFilterChange = React.useCallback((payload) => {
    const filterIDInts = payload.map(d => parseInt(d));
    setTagFilter(filterIDInts);
  }, []);

  return (
    <BudgetWrapper>
      <BudgetHeader
        handleDateChange={handleDateChange}
        handleFilterChange={handleFilterChange}
      />
      <BudgetStreams date={date} filter={tagFilter} />
    </BudgetWrapper>
  );
}

export default Budget;
