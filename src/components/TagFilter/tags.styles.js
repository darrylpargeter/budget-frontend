import styled from "styled-components"
import { Button } from '../DatePicker/datepicker.styles';

const Tags = styled.div`
  grid-area: tags;
  justify-self: start;
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--primary-font-colour);
`;

const TagWrapper = styled(Button)`
  color: ${props => props.selected ? 'var(--primary-font-colour)' : 'var(--secondary-font-colour)'};
`;

export {
  TagWrapper,
  Tags,
}
