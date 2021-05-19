import React, { Component } from 'react'
import MainPage from '../containers/MainPage';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom'
  import DetailPage from '../containers/DetailPage'
  import Scroll from '../containers/Scroll'
  import avatar from '../../assets/avatar.png'
  import styles from '../containers/Containers.css'

export default class App extends Component {
  render() {
    return (
      <div>
         <Router>
            <img src={avatar} alt="" style={{width: '50%', border: '0', margin: '0 auto', display: "flex"}} className={styles.headerPic}/>
            <br/>
            <Switch>
              <Scroll>
                <Route
                      path="/"
                      exact
                      render={(routerProps) => <MainPage {...routerProps}/>}
                    />
                <Route
                      path="/details/:id"
                      exact
                      render={(routerProps) => <DetailPage {...routerProps}/>}
                      />

              </Scroll>
              </Switch>
          </Router>
      </div>
    )
  }
}

