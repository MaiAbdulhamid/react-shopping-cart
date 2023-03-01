
// reducer
export default function categories(state = []) {
  return state; // nothing to do here, but we need categories node in redux store
}

// selectors
export function getCategories(state, props) {
  return state.categories;
}

