import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Grafico from './pages/Grafico';
import Configuracoes from './pages/Configuracoes';
import Historico from './pages/Historico';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Switch>
            <Route path="/grafico" component={Grafico} />
            <Route path="/configuracoes" component={Configuracoes} />
            <Route path="/historico" component={Historico} />
            <Route path="/" exact component={Grafico} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
