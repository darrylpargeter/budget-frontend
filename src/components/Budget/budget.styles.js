import styled from "styled-components"

const BudgetWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  background: var(--primary-colour);
`;

const BudgetStreamsWrapper = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: ${props => `repeat(${props.rows}, .1fr)`};
  grid-gap: 8px;
  background: #f6f6f4;
  height: 100%;
`; 

export {
  BudgetWrapper,
  BudgetHeaderLayout,
  BudgetStreamsWrapper, 
}
