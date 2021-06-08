import styled from "styled-components"

const StreamCardWrapper = styled.div`
  grid-area: ${props => props.area.toLowerCase()};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows 1fr 1fr 1fr;
  border-radius: 10%;
  border: 1px solid #ededed;
`; 

export {
  StreamCardWrapper,
};
