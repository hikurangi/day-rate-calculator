import Grid                      from '@material-ui/core/Grid'
import { makeStyles }            from '@material-ui/styles'
import { h, img, h2, h3, em, p } from 'react-hyperscript-helpers'
import { thisYear }              from '../helpers/day-counter'
import logo                      from '../assets/logo.svg'

const useStyles = makeStyles({ // can receive theme as param
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px'
  },
  header: {
    padding: '20px'
  }
})

const Header = () => {
  const { appLogo, header } = useStyles()

  return h(Grid, { className: header, item: true, xs: 12 }, [
    img({ src: logo, className: appLogo, alt: 'App Logo' }),
    h2('Contractor Day Rate Calculator'),
    h3([em(`accurate for ${thisYear}`)]),
    p(
      'Built by Hikurangi Schaverien-Kaa with information from Jody at Enspiral Dev Academy'
    )
  ])
}

export default Header
