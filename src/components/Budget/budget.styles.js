import styled from "styled-components"

const BudgetWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const BudgetHeaderLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 2fr 1fr;
  grid-template-areas:
    "incomes datepicker datepicker overview"
    "tags tags tags tags";
  padding: 16px;
  justify-items: center;
`;

export {
  BudgetWrapper,
  BudgetHeaderLayout,
}
