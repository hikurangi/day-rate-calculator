import React from 'react';

import { TableRow, TableRowColumn } from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';

const Salary = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Salary</h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="salary"
          type="number"
          hintText="Enter your expected full time salary"
          onChange={handleChange}
          fullWidth={true}
        />
      </TableRowColumn>
    </TableRow>
  );
};

export default Salary;
