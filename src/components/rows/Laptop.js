const laptop = ({ handleChange }) => {
  return (
    <TableRowColumn>
      <h3>
        The cost of your work PC:
      </h3>
    </TableRowColumn>
    <TableRowColumn>
      <TextField
        name="laptop"
        type="number"
        hintText="Enter your FTE"
        onChange={handleChange}
        fullWidth={true}
      />
    </TableRowColumn>
  )
}

export default Laptop
