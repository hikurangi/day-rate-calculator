import React from 'react';

import { TableRow, TableRowColumn } from '@material-ui/core/Table';

const DayRate = ({
  annualLeave,
  sickLeave,
  publicHolidays,
  weekends,
  days,
  salary,
  kiwisaver,
  depreciation,
  phoneContribution,
  style
}) => {
  const total =
    Object.values(days)
      .filter(value => value < 54) // get rid of the 'thisYear' value
      .reduce((a, b) => a + b) - // add up all the remaining values
    (annualLeave + sickLeave + publicHolidays + weekends);

  const sum = salary + kiwisaver + depreciation + phoneContribution;
  const output = sum / total;
  // (!isNaN(total) && !isNaN(sum) && annualLeave && sickLeave && (sum / total).toFixed(2))
  console.log({
    annualLeave,
    sickLeave,
    publicHolidays,
    weekends,
    days,
    salary,
    kiwisaver,
    depreciation,
    phoneContribution,
    style,
    total,
    sum
  });

  return (
    <TableRow>
      <TableRowColumn>
        <h3>Your day rate is</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          {!isNaN(output) && output && '$' + output.toFixed(2)}
        </p>
      </TableRowColumn>
    </TableRow>
  );
};

export default DayRate;
