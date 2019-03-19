import React from 'react';

import { TableRow, TableRowColumn } from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';

const SickLeave = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Your total number of yearly sick leave days</h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="sickLeave"
          type="number"
          hintText="Your total number of yearly sick leave days"
          onChange={handleChange}
        />
      </TableRowColumn>
    </TableRow>
  );
};

export default SickLeave;
