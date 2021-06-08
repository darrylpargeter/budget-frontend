import {
  BrowserRouter as Router,
} from "react-router-dom";
import { createClient, Provider } from 'urql';
import styled from "styled-components"

import Content from './containers/Content';

// Components
import Nav from './containers/Nav';

const GRAPHQL_URL = 'http://localhost:8000/graphql';
const client = createClient({
  url: GRAPHQL_URL,
});


const Layout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  max-height: 100vh;
  height: 100vh;
  max-width: 100vw;
  width: 100vw;
`;


function App() {
  return (
    <Provider value={client}>
      <Layout>
        <Router>
          <Nav />
          <Content />
        </Router>
      </Layout>
    </ Provider>
  );
}

export default App;
