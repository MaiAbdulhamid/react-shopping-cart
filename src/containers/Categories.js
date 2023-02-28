import { connect } from "react-redux";
import Categories from "../components/Categories";
import { getCategories, chosenCategory } from "../ducks/categories";

const mapStateToProps = (state, props) => {
  return {
    categories: getCategories(state, props),
  };
};
const mapDispatchToProps = (dispatch) => ({
  chosenCategory: (id) => dispatch(chosenCategory(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
