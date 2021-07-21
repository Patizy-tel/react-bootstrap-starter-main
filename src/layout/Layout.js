// router
import { BrowserRouter as Router} from 'react-router-dom'

// components
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
  return (
    <Router>
      <Menu />

      <P>Hello</P>
      <main fluid='xl'>{children}</main>

      
      <Footer />
    </Router>
  )
}

export default Layout
