import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Disciplina from '../pages/disciplina';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/disciplina/:id" component={Disciplina} />
  </Switch>
);

export default Routes;
