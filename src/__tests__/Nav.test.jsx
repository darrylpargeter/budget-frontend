import { render, screen } from '@testing-library/react';
import App from '../App';
import navConfig from '../constants/nav';

test('renders the correct number of nav items', () => {
  render(<App />);
  const linkElements = navConfig.map(item => screen.getByText(item.label));
  linkElements.forEach(link => expect(link).toBeInTheDocument());
});

test('Nav Items point to the correct routes', () => {
  render(<App />);
  const linkElements = navConfig.map(item => screen.getByTestId(item.label));
  linkElements.forEach((link, idx) => expect(link).toHaveAttribute('href', navConfig[idx].route));
});

test('For the First nav item to default to Active class', () => {
  render(<App />);
  const link = screen.getByTestId(navConfig[0].label);
  expect(link).toHaveClass('active-nav');
})
