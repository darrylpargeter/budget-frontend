import { useQuery } from 'urql';
import { BudgetHeader } from '../../components/Budget/index';
import { BudgetWrapper } from '../../components/Budget/budget.styles';

const BudgetQuery = `
  query {
    incomes {
      total
      incomes {
        label
        value
      }
    }
    tags {
      label
    }
  }
`;

const Budget = () => {
  const [results] = useQuery({
    query: BudgetQuery,
  });

  const { data, fetching, error } = results;

  const handleDateChange = (payload) => {
    console.log('handleDateChange', payload);
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
