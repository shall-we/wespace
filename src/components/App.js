import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage,DirectoryPage,LoginPage,JoinPage,MainPage } from 'pages';
const App = () => {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={ListPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/join' component={JoinPage}/>
      <Route path='/main' component={MainPage}/>
      <Route path='/page/:page' component={ListPage}/>
      <Route path='/directory' component={DirectoryPage}/>
      <Route path='/tag/:tag/:page?' component={ListPage}/>
      <Route path='/post/:id' component={PostPage}/>
      <Route path='/editor' component={EditorPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  );
};
 
export default App;