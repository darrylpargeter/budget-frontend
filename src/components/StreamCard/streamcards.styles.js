import styled from "styled-components"
import { Button } from '../DatePicker/datepicker.styles';

const StreamCardWrapper = styled(Button)`
  grid-area: ${props => props.area.toLowerCase()};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows repeat(3, auto);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 5px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #ededed;
  width: 100%;
  margin: 8px;
  padding: 0;
`; 

const StreamCardTotalItems = styled.h3`
  color: var(--secondary-font-colour);
  font-size: 24px;
  margin-left: 16px;
  justify-self: start;
`;

const StreamCardTotal = styled.h2`
  justify-self: center;
  font-size: 48px;
`;

const StreamLink = styled.div`
  border-top: 1px solid #000;
  text-align: center;
  padding-top: 4px;
  margin-bottom: 8px;
`;

const StreamCardItem = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 1px solid #000;
  padding: 4px;
`;

export {
  StreamCardWrapper,
  StreamCardTotal,
  StreamLink,
  StreamCardTotalItems,
  StreamCardItem,
};
