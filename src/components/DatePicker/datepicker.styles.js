import styled from "styled-components"

const DateWrapper = styled.div`
  display: grid;
  grid-area: datepicker;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: .5fr 1fr .5fr;
`;

// @TODO move Button into a more logical place
const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Today = styled(Button)`
  grid-column: 2 / 3;
  align-self: start;
  font-size: 24px;
  color: var(--secondary-font-colour);
`;

const Pickers = styled(Button)`
  justify-self: center;
  font-size: 64px;
`;

const Month = styled.h1`
  justify-self: center;
  align-self: center;
  font-size: 64px;
`

export {
  DateWrapper,
  Today,
  Pickers,
  Month,
  Button,
}
