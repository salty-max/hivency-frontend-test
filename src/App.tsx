import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlayerShow from './screens/PlayerShow';
import TeamList from './screens/TeamList';
import TeamShow from './screens/TeamShow';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={TeamList} />
      <Route exact path="/teams/:id" component={TeamShow} />
      <Route exact path="/players/:id" component={PlayerShow} />
    </Router>
  );
};

export default App;
