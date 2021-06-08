import {
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Budget from './Budget/index';
import Incomes from './Incomes/index';
import Streams from './Streams/index';
import StreamItems from './StreamItems/index';
import Tags from './Tags/index';

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <Redirect to="/budget" />
      </Route>
      <Route path="/budget">
        <Budget />
      </Route>
      <Route path="/incomes">
        <Incomes />
      </Route>
      <Route path="/streams">
        <Streams />
      </Route>
      <Route path="/stream-items">
        <StreamItems />
      </Route>
      <Route path="/tags">
        <Tags />
      </Route>
    </Switch>
  </main>
);

export default Content;
