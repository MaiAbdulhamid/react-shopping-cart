import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import cartReducer from "../actions/cart";
import productsReducer from "../actions/products";
import categoriesReducer from "../actions/categories";
import productsData from "../data/products";
import categoriesData from "../data/categories";
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
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

export default function Root({children}) {
  return (
    <Provider store={store}>
      {children}
   </Provider>
  )
}