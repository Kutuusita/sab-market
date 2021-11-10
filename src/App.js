import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Service from './services/service';
import { StoreServiceProvider } from './components/store-context';

import ErrorBoundry from './components/error-boundry';
import Catalog from "./components/catalog";
import Category from './components/category';
import ProductDetails from './components/product-details';
import Footer from './components/footer';
import Navigation from './components/navigation';
import './app.scss';
import MiniCart from './components/mini-cart';



const App = () => {

  const storeService = new Service();

  return (
    <Provider store={store}>
      <ErrorBoundry>
        <StoreServiceProvider value={storeService} >
          <div className="container page-content">
            <button
            onClick={
              ()=>{
                window.localStorage.removeItem('app_state')
              }
            }>Clean localStorage</button>
            <MiniCart />
            <Router>
              <Navigation />
              <Route path="/category/:id" render={
                ( { match } ) => {
                  const { id } = match.params;
                  return <Category itemId={ id } />
                }
              } />
              <Route path="/" render={
                () => {
                  return (
                    <>
                    <Catalog itemId='2' />
                    <Catalog itemId='3' />
                    </>
                  )
                }
              } exact />
              <Route path="/:id" exact render={
                ( { match } ) => {
                  const { id } = match.params;
                  if (id === '3' || id === '2' ){
                    return (
                      <>
                      <Catalog itemId='2' />
                      <Catalog itemId='3' />
                      </>
                    )
                  } else {
                    return <Catalog itemId={ id } />
                  }
                }
              } />
              <Route path="/product/:id" render={
                ( { match } ) => {
                  const { id } = match.params;
                    return <ProductDetails itemId={ id } />
                }
              } />
            </Router>
          </div>
        </StoreServiceProvider>
      </ErrorBoundry>
      <Footer />
    </Provider>
  );
}

export default App;
