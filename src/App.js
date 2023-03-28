import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from './Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Service from './Pages/Service'
import Recharge from './Pages/Recharge'
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/recharge" component={Recharge}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/error" component={Error}></Route>
      </Switch>
    </>
  )
}

export default App
