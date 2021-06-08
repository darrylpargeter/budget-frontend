import styled from "styled-components"

const DateWrapper = styled.div`
  display: grid;
  grid-area: datepicker;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(3, 1fr);
`;

// @TODO move Button into a more logical place
const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Today = styled(Button)`
  grid-column: 2 / 3;
`;

const Pickers = styled(Button)`
  justify-self: center;
`;

const Month = styled.h1`
  justify-self: center;
`

export {
  DateWrapper,
  Today,
  Pickers,
  Month,
  Button,
}
