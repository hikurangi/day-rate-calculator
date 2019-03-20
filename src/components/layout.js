import Grid       from '@material-ui/core/Grid'
import { h }      from 'react-hyperscript-helpers'
import Header     from './header'
import Calculator from './calculator'

const Layout = () => {
  return h(Grid, { container: true }, [
    h(Header),
    h(Calculator)
  ])
}

export default Layout
