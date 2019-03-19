import React from 'react';

import { TableRow, TableRowColumn } from '@material-ui/core/Table';

const PublicHolidays = ({ thisYear, publicHolidays, style }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Public holidays in {thisYear}</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>{publicHolidays}</p>
      </TableRowColumn>
    </TableRow>
  );
};

export default PublicHolidays;
