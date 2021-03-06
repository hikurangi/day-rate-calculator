import React from 'react';

import { TableRow, TableRowColumn } from '@material-ui/core/Table';

const DaysWorking = ({
  annualLeave,
  sickLeave,
  publicHolidays,
  weekends,
  days,
  style
}) => {
  const total =
    Object.values(days)
      .filter(value => value < 54) // get rid of the 'thisYear' value
      .reduce((a, b) => a + b) - // add up all the remaining values
    (annualLeave + sickLeave + publicHolidays + weekends);
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Total number of days you are working this year</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          {!isNaN(total) && annualLeave && sickLeave && total}
        </p>
      </TableRowColumn>
    </TableRow>
  );
};

export default DaysWorking;
