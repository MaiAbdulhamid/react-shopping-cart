import { connect } from "react-redux";
import ProductList from "../components/ProductList";
import { getProducts } from "../actions/products";

const mapStateToProps = (state: any, props: any) => {
  return {
    products: getProducts(state, props),
  };
};

export default connect(mapStateToProps)(ProductList);
