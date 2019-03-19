import React from 'react';
import { TableRow, TableRowColumn } from '@material-ui/core/Table';

const Kiwisaver = ({ style, kiwisaver }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>3% Kiwisaver Employer minimum contribution</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          {kiwisaver !== 0 && !isNaN(kiwisaver) && '$' + kiwisaver.toFixed(2)}
        </p>
      </TableRowColumn>
    </TableRow>
  );
};

export default Kiwisaver;
