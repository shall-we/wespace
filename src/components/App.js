import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EditorPage, NotFoundPage, DirectoryPage, LoginPage, JoinPage, MainPage, ModalTestPage } from '../pages';
const App = () => {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/join' component={JoinPage}/>
      <Route path='/directory' component={DirectoryPage}/>
      <Route path='/editor' component={EditorPage}/>
      <Route exact path='/modal' component={ModalTestPage} />

      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  );
};
 
export default App;