import { Fragment }              from 'react'
import { h, img, h2, h3, em, p } from 'react-hyperscript-helpers'
import { makeStyles }            from '@material-ui/styles'
import { thisYear }              from '../helpers/day-counter'
import logo                      from '../static/logo.svg'

const useStyles = makeStyles({
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '80px'
  }
})

const Header = () => { // TODO: i18n
  const { appLogo } = useStyles()

  return h(Fragment, [

    // TODO: fix this error
    img({ src: logo, className: appLogo, alt: 'App Logo' }),
    h2('Contractor Day Rate Calculator'),
    h3([em(`accurate for ${thisYear}`)]),
    p('Built by Hikurangi Schaverien-Kaa with information from Jody at Enspiral Dev Academy')
  
  ])
}

export default Header
