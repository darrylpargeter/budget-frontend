import styled from "styled-components"
import { Button } from '../DatePicker/datepicker.styles';

const Tags = styled.div`
  grid-area: tags;
  justify-self: start;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const TagWrapper = styled(Button)`
  border-radius: ${props => props.selected ? '20%' : 0 };
  background: ${props => props.selected ? '#ededed' : 'none' };
`;

export {
  TagWrapper,
  Tags,
}
