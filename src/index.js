import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import categoriesReducer from "./ducks/categories";
import App from "./App";
import productsData from "./data/products";
import categoriesData from "./data/categories";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

let store = createStore(
  rootReducer,
  {
    // initial store values
    products: productsData, 
    categories: categoriesData,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
