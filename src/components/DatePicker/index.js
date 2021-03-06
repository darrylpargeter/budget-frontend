import React from 'react';
import PropTypes from 'prop-types';
import {
  DateWrapper,
  Today,
  Pickers,
  Month,
} from './datepicker.styles';
import { format, addMonths, subMonths, getMonth, getYear } from 'date-fns';


const TODAYDATEFORMAT = 'EEEE do MMM';
const MONTHDATEFORMAT = 'MMM y';

const DatePicker = ({ onDateChange }) => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    if (onDateChange && typeof onDateChange === 'function') {
      const payload = { month: getMonth(date), year: getYear(date) };
      onDateChange(payload);
    }
  }, [date, onDateChange]);

  const todayHeader = format(new Date(), TODAYDATEFORMAT);
  const monthHeader = format(date, MONTHDATEFORMAT);

  const addMonth = () => setDate(prev => addMonths(prev, 1));
  const subMonth = () => setDate(prev => subMonths(prev, 1));
  const resetDate = () => setDate(new Date());

  return (
    <DateWrapper>
      <Pickers data-testid="sub-month" onClick={subMonth}>{"<"}</Pickers>
      <Month>{monthHeader}</Month>
      <Pickers data-testid="add-month" onClick={addMonth}>{">"}</Pickers>
      <Today onClick={resetDate}>{todayHeader}</Today>
    </DateWrapper>
  );
}

DatePicker.propTypes = {
  onDateChange: PropTypes.func,
};

export default DatePicker;
