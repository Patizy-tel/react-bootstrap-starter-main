import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

const App = () => {
  return (

    <div>

<Layout>
  
     <Switch>
       <Route path='/' component={Home} exact />
       <Route path='/about' component={About} />
       <Route component={NotFound} />
     </Switch>
  
 </Layout>


    </div>
    
  )
}

export default App
