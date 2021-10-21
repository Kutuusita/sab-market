import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Service from './services/service';
import { StoreServiceProvider } from './components/store-context';

import ErrorBoundry from './components/error-boundry';
import Catalog from "./components/catalog";
import Category from './components/category';
import Footer from './components/footer';
import Navigation from './components/navigation';
import './app.scss';



const App = () => {

  const storeService = new Service();

  return (
    <Provider store={store}>
      <ErrorBoundry>
        <StoreServiceProvider value={storeService} >
          <div className="page-content">
            <Router>
              <Navigation />
              <Route path="/category/:id" render={
                ( { match } ) => {
                  const { id } = match.params;
                  return <Category itemId={ id } />
                }
              } />
              <Route path="/" component={ Catalog } exact />
            </Router>
          </div>
        </StoreServiceProvider>
      </ErrorBoundry>
      <Footer />
    </Provider>
  );
}

export default App;
