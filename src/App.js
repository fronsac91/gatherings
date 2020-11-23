import React, { Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Header from './components/UI/Header';
import EventCreationForm from './components/EventCreationForm';
import SuccessPage from './components/SuccessPage';

const App = (props) => {
  return (
    <Fragment>
      <Header title="New event"/>
      <Switch>
        <Route path="/success" component={SuccessPage}/>
        <Route path="/" component={EventCreationForm}/>
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default withRouter(App);
