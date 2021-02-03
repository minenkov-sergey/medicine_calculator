import styles from './App.module.css';
import { React } from 'react';
import MainMenu from './Components/MainMenu/MainMenu';
import { Route, Switch, withRouter } from 'react-router-dom';
import Operation from './Components/MainMenu/Operation/Operation';



const App = () => {

  return (
    <div className={styles.App}>
        <Switch>
          <Route exact path='/' > <MainMenu /> </Route>
          <Route path='/operation/' >  <Operation /> </Route>
          {/* <Route path='/operation/page2' >  <Page2 /> </Route>
          <Route path='/operation/page3' >  <Page3 /> </Route>
          <Route path='/operation/page4' >  <Page4 /> </Route>
          <Route path='/operation/page5' >  <Page5 /> </Route>
          <Route path='/operation/page6' >  <Page6 /> </Route> */}
        </Switch>
      </div>
  );
}

export default withRouter(App);
