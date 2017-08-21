const FTE = ({ handleChange }) => {
  return (
    <TableRowColumn>
      <h3>
        Your <a href="http://centraltas.co.nz/assets/SWS/HWIP/A-practical-guide-to-FTE-reporting-2015.pdf" target="blank"> FTE </a>
      </h3>
    </TableRowColumn>
    <TableRowColumn>
      <TextField
        name="fte"
        type="number"
        hintText="Enter your FTE"
        onChange={handleChange}
        fullWidth={true}
      />
    </TableRowColumn>
  )
}
