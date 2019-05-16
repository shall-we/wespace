import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFoundPage, LoginPage, JoinPage, IntroPage, ModalTestPage, MainPage } from '../pages';
const App = () => {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={IntroPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/join' component={JoinPage}/>
      <Route exact path='/modal' component={ModalTestPage} />
      {/* /:{name} 의 name을 wehago로 임시 지정 */}
      <Route exact path='/note' component={MainPage} />
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
  );
};
 
export default App;