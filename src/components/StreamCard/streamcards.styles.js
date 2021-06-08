import styled from "styled-components"
import { Button } from '../DatePicker/datepicker.styles';

const StreamCardWrapper = styled(Button)`
  grid-area: ${props => props.area.toLowerCase()};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows repeat(3, auto);
  border-radius: 10px;
  border: 1px solid #ededed;
  width: 100%;
  margin: 8px;
  padding: 0;
  background: #fff;
  transition: transform .2s ease-in-out;

  :hover {
    transform: scale(1.01);
    transition: transform .2s ease-in-out;
  }
`; 

const StreamCardTotalItems = styled.h3`
  color: var(--offwhite);
  font-size: 24px;
  margin-left: 16px;
  justify-self: start;
`;

const StreamCardTotal = styled.h2`
  justify-self: center;
  font-size: 48px;
  color: var(--third-font-colour);
`;

const StreamLink = styled.div`
  border-top: 1px solid var(--secondary-font-colour);
  text-align: center;
  padding-top: 4px;
  padding-bottom: 8px;
  transition: background .3s ease-in-out;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  a {
    display: inline-block;
    width: 100%;
  }

  :hover {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: var(--secondary-colour);
    transition: background .3s ease-in-out;

    a {
      color: var(--primary-font-colour);
      transition: color .3s ease-in-out;
    }
  }
`;

const StreamCardItem = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 1px solid var(--secondary-font-colour);
  padding: 4px;

  p {
    color: var(--third-font-colour);
  }
`;

export {
  StreamCardWrapper,
  StreamCardTotal,
  StreamLink,
  StreamCardTotalItems,
  StreamCardItem,
};
