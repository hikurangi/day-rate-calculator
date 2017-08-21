import React from 'react'
import { TableRow, TableRowColumn } from 'material-ui/Table'

const EmployerPhoneContribution = ({ style, cellphone }) => {
  return (
    <TableRow>
      <TableRowColumn>
        <h3>Employer Cellphone Contribution</h3>
      </TableRowColumn>
      <TableRowColumn>
        <p className={style.outputNumbers}>
          { cellphone ? '$ ' + (cellphone).toFixed(2)*12 : null }
        </p>
      </TableRowColumn>
    </TableRow>
  )
}

export default Depreciation
