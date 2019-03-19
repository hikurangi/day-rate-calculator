import { TableRow, TableRowColumn } from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import { h, a, h3 } from 'react-hyperscript-helpers';

const FTE = ({ handleChange }) =>
  h(TableRow, [
    h(TableRowColumn, [
      h3([
        'Your FTE ',
        a(
          {
            href:
              'http://centraltas.co.nz/assets/SWS/HWIP/A-practical-guide-to-FTE-reporting-2015.pdf',
            target: '_blank',
            rel: 'noopener noreferrer'
          },
          'Full Time Equivalent'
        )
      ])
    ]),
    h(TableRowColumn, [
      h(TextField, {
        name: 'fte',
        type: 'number',
        hintText: "Generally '1' - meaning 40 hours/week",
        onChange: handleChange,
        fullWidth: true
      })
    ])
  ]);

export default FTE;
