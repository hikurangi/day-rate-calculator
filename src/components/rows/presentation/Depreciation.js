import React from 'react';
import { TableRow, TableRowColumn } from '@material-ui/core/Table';

const Depreciation = ({ style, depreciation }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Depreciation over three years</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          {!isNaN(depreciation) &&
            isFinite(depreciation) &&
            '$' + depreciation.toFixed(2)}
        </p>
      </TableRowColumn>
    </TableRow>
  );
};

export default Depreciation;
