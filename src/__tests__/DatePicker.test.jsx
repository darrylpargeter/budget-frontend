import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import DatePicker from '../components/DatePicker/index';
import {
  format,
  getMonth,
  addMonths,
  subMonths,
  getYear,
  addYear,
  subYears
} from 'date-fns';

const TODAYDATEFORMAT = 'EEEE do MMM';
const MONTHDATEFORMAT = 'MMM y';

test('DatePicker display with todays date', () => {
  render(<DatePicker />);
  const today = format(new Date(), TODAYDATEFORMAT);
  expect(screen.getByText(today)).toBeVisible();
});

test('DatePicker displays with current month and year by default', () => {
  render(<DatePicker />);
  const dateText = format(new Date(), MONTHDATEFORMAT);
  expect(screen.getByText(dateText)).toBeVisible();
});

test('When > is clicked month moves forward by one', () => {
  render(<DatePicker />);
  const dateText = format(addMonths(new Date(), 1), MONTHDATEFORMAT);
  userEvent.click(screen.getByTestId('add-month'));
  expect(screen.getByText(dateText)).toBeVisible();
});

test('When < is clicked month moves backwards by one', () => {
  render(<DatePicker />);
  const dateText = format(subMonths(new Date(), 1), MONTHDATEFORMAT);
  userEvent.click(screen.getByTestId('sub-month'));
  expect(screen.getByText(dateText)).toBeVisible();
});

test('After changing date clicking todays date resets main display', () => {
  render(<DatePicker />);
  const pastDateText = format(subMonths(new Date(), 1), MONTHDATEFORMAT);
  const currentDateText = format(new Date(), MONTHDATEFORMAT);
  userEvent.click(screen.getByTestId('sub-month'));
  expect(screen.getByText(pastDateText)).toBeVisible();
  const today = format(new Date(), TODAYDATEFORMAT);
  userEvent.click(screen.getByText(today))
  expect(screen.getByText(currentDateText)).toBeVisible();
});

test('When date is change onDateChange is fired', () => {
  const onDateChangeMock = jest.fn(payload => payload);
  render(<DatePicker onDateChange={onDateChangeMock} />);

  userEvent.click(screen.getByTestId('sub-month'));
  expect(onDateChangeMock.mock.calls.length).toBe(2);
  const expectedRusults = { month: getMonth(subMonths(new Date(), 1)), year: getYear(new Date()) };
  expect(onDateChangeMock.mock.results[1].value).toStrictEqual(expectedRusults);
});
