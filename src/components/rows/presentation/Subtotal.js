import React from 'react';

import { TableRow, TableRowColumn } from '@material-ui/core/Table';

const Subtotal = ({
  style,
  salary,
  kiwisaver,
  depreciation,
  phoneContribution
}) => {
  const sum = salary + kiwisaver + depreciation + phoneContribution;
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Subtotal</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>{!isNaN(sum) && '$' + sum.toFixed(2)}</p>
      </TableRowColumn>
    </TableRow>
  );
};

export default Subtotal;
