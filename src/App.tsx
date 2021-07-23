import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

import './App.scss'

import { store } from './ReduxStore/store';
import { Provider} from 'react-redux'
import Nav from './components/Nav/Nav';
import Results from './components/Results/Results';

function App() {
  return (
    <div className="App">
      <section>
        <Provider store={store}>
        <Router>
          <Header />
          <Nav />
          {/* <Results /> */}
          <Switch>
            <section className="main">
              <Routes />
            </section>
          </Switch>
          <Footer />
        </Router>
        </Provider>
      </section>
    </div>
  );
}

export default App;
