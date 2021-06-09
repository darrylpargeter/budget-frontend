import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import StreamCard from '../components/StreamCard/index';

const data = {
  incomes: {
    total:2000,
    incomes:[
      {
        label:"income 1",
        value:1000
      },
      {
        label:"income 2",
        value:1000,
      }
    ]
  }
};
const props = {
  data: data.incomes,
  title: "Incomes",
  length: data.incomes.incomes.length,
  dataKey: "incomes",
  route: "incomes",
};

test('StreamCard displays the correct total streams', () => {
  render(
    <Router>
      <StreamCard
        {...props}
      />
    </Router>
  );
  expect(screen.getByText(`${props.length} Incomes`)).toBeVisible();
});

test('StreamCard displays the correct stream total', () => {
  render(
    <Router>
      <StreamCard
        {...props}
      />
    </Router>
  );
  expect(screen.getByText(`£${props.data.total}`)).toBeVisible();
});

test('StreamCard to display link to add', () => {
  render(
    <Router>
      <StreamCard
        {...props}
      />
    </Router>
  );
  const title = `Add ${props.title}`
  const route = `/${props.route}`;
  expect(screen.getByText(title)).toBeVisible();
  expect(screen.getByText(title)).toHaveAttribute('href', route);
});

test('When clicked StreamCard displays the correct number of items', () => {
  render(
    <Router>
      <StreamCard
        {...props}
      />
    </Router>
  );
  userEvent.click(screen.getByTestId("stream-wrapper"));
  const items = props.data.incomes.map(item => screen.getByText(item.label));
  expect(items).toHaveLength(2);
  items.forEach((item, idx) => {
    expect(item).toBeVisible();
  })
});
