import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";

import reducer from './reducers';

import { fetchCategories } from './actions';
import Service from './services/service';

const storeService = new Service();

const initialState = {
  currentCategory: {},
  categoryList: {
    categories: [],
    loading: true,
    error: null,
  },
  productList: {
    products: [],
    cutegoryId: null,
    loading: true,
    error: null,
  },
  shoppingCart: {
    cartItems: [],
    orderTotal: 0,
  },
  product: {
    product: [],
    productId: null,
    loading: true,
    error: null,
  },

}
const loadState = () => {
  try {
      // Load the data saved in localStorage, against the key 'app_state'
      const serialisedState = window.localStorage.getItem('app_state');

      // Passing undefined to createStore will result in our app getting the default state
      // If no data is saved, return undefined
      if (!serialisedState) return initialState;

      // De-serialise the saved state, and return it.
      return JSON.parse(serialisedState);
  } catch (err) {
      // Return undefined if localStorage is not available,
      // or data could not be de-serialised,
      // or there was some other error
      return initialState;
  }
};

const oldState = loadState();

const saveState = (state) => {
  try {
      const serialisedState = JSON.stringify(state);
      window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
      // Log errors here, or ignore
  }
};

const store = createStore(reducer, oldState, applyMiddleware(thunkMiddleWare));

store.subscribe(() => {
  saveState(store.getState());
});

store.dispatch(fetchCategories(storeService));

export default store;
