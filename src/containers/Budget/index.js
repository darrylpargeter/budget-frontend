import React from 'react';
import { useQuery } from 'urql';
import { getMonth, getYear } from 'date-fns';
import { BudgetHeader } from '../../components/Budget/index';
import { BudgetWrapper } from '../../components/Budget/budget.styles';

const BudgetQuery = `
  query ($month: Int!, $year: Int!) {
    incomes {
      total
      incomes {
        label
        value
      }
    }
    tags {
      label
      id
    }
    streams(month: $month, year: $year) {
      label
      tag {
        id
      }
      items {
        label
      }
    }
  }
`;

const Budget = () => {
  const [date, setDate] = React.useState({ month: getMonth(new Date()), year: getYear(new Date()) });
  const [results, reexecuteQuery] = useQuery({
    query: BudgetQuery,
    variables: { month: date.month, year: date.year }
  });

  const { data, fetching, error } = results;

  const handleDateChange = (payload) => {
    if (payload.month !== date.month || payload.year !== date.year) {
    console.log('handleDateChange', payload);
    console.log('date', date);
      reexecuteQuery({ variables: { ...payload } });
    }
  };

  const handleFilterChange = (payload) => {
    console.log('handleFilterChange', payload);
  }

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;


  return (
    <BudgetWrapper>
      <BudgetHeader
        incomes={data.incomes}
        tags={data.tags}
        handleDateChange={handleDateChange}
        handleFilterChange={handleFilterChange}
      />
      <h2>Budget2</h2>
    </BudgetWrapper>
  );
}

export default Budget;
