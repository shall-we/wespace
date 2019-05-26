import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFoundPage, LoginPage, JoinPage, IntroPage, MainPage,PublicPage } from '../pages';
const App = () => {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={IntroPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/join' component={JoinPage}/>
      <Route exact path='/note' component={MainPage} />
      <Route path='/note/public/:uuid' component={PublicPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  );
};
 
export default App;