import styles from './App.module.css';
import { React } from 'react';
import MainMenu from './Components/MainMenu/MainMenu';
import { Route, Switch, withRouter } from 'react-router-dom';

import Page2 from './Components/MainMenu/Operation/Page2/Page2';
import Page3 from './Components/MainMenu/Operation/Page3/Page3';
import Page4 from './Components/MainMenu/Operation/Page4/Page4';
import Page5 from './Components/MainMenu/Operation/Page5/Page5';
import Page6 from './Components/MainMenu/Operation/OperationResult/Page6';
import Operation from './Components/MainMenu/Operation/Operation';
import TestCounter from './Components/TestCounter/TestCounter';


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
          <Route path='' > </Route>
          <Route path='' > </Route>
        </Switch>
        <TestCounter />
      </div>
  );
}

export default withRouter(App);
