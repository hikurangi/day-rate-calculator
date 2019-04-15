import { h }          from 'react-hyperscript-helpers'
import Grid           from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import Header         from './header'
import Calculator     from './calculator'

const useStyles = makeStyles({
  container: {
    height: '100%'
  },
  padItem: {
    padding: '20px'
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
})

const Layout = () => {
  const { body, container, padItem } = useStyles()

  return h(Grid, { className: container, container: true }, [

    h(Grid, { className: padItem, item: true, xs: 12 }, [
      h(Header)
    ]),
    
    h(Grid, { className: [padItem, body], item: true, xs: 12 }, [
      h(Calculator)
    ])

  ])
}

export default Layout
