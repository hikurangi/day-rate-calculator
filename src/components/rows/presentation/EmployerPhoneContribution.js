import React from 'react';
import { TableRow, TableRowColumn } from '@material-ui/core/Table';

const EmployerPhoneContribution = ({ style, phoneContribution }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Employer yearly cellphone contribution</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p style={style.outputNumbers}>
          {!isNaN(phoneContribution) && '$' + phoneContribution.toFixed(2)}
        </p>
      </TableRowColumn>
    </TableRow>
  );
};

export default EmployerPhoneContribution;
