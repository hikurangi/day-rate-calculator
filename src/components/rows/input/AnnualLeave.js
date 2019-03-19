import React from 'react';

import { TableRow, TableRowColumn } from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';

const AnnualLeave = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Your total number of annual leave days</h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="annualLeave"
          type="number"
          hintText="Your total number of annual leave days"
          onChange={handleChange}
        />
      </TableRowColumn>
    </TableRow>
  );
};

export default AnnualLeave;
