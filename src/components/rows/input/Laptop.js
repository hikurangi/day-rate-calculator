import React from 'react';
import { TableRow, TableRowColumn } from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';

const Laptop = ({ handleChange }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>The cost of your work PC</h3>
      </TableRowColumn>
      <TableRowColumn>
        <TextField
          name="laptop"
          type="number"
          hintText="The price of your computer"
          onChange={handleChange}
          fullWidth={true}
        />
      </TableRowColumn>
    </TableRow>
  );
};

export default Laptop;
