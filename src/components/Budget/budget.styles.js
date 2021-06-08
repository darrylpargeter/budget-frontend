import styled from "styled-components"

const BudgetWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const BudgetHeaderLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "incomes datepicker datepicker overview"
    "tags tags tags tags";
  padding: 16px;
  justify-items: center;
  align-items: start;
`;

const BudgetStreamsWrapper = styled.div`
  margin: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
`; 

export {
  BudgetWrapper,
  BudgetHeaderLayout,
  BudgetStreamsWrapper, 
}
