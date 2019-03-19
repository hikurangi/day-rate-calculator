import React from 'react';

import { TableRow, TableRowColumn } from '@material-ui/core/Table';

const DaysNotWorking = ({
  annualLeave,
  sickLeave,
  publicHolidays,
  weekends,
  style
}) => {
  const total = +annualLeave + +sickLeave + +publicHolidays + +weekends;
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Total days you are NOT working</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>{!isNaN(total) && total}</p>
      </TableRowColumn>
    </TableRow>
  );
};

export default DaysNotWorking;
