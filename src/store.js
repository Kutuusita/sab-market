import { createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";

import reducer from './reducers';

import { fetchCategories } from './actions';
import Service from './services/service';

const storeService = new Service();

const initialState = {
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
    cartItems: {},
    orderTotal: 0,
  }
}

const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleWare));

store.dispatch(fetchCategories(storeService));

export default store;
