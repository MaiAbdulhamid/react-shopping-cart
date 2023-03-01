import { connect } from "react-redux";
import Categories from "../components/Categories";
import { getCategories } from "../actions/categories";

const mapStateToProps = (state, props) => {
  return {
    categories: getCategories(state, props),
  };
};

export default connect(mapStateToProps)(Categories);
