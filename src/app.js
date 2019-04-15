import './app.css'
import Layout from './components/layout'
import { h }  from 'react-hyperscript-helpers'
// import 'typeface-roboto'

const App = () => {
  return h(Layout) // should explicitly pass child elements here
}

export default App
