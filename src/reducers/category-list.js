const updateCategoryList = (state, action) => {
  if (state === undefined) {
    return {
      categories: [],
      loading: true,
      error: null,
    }
  }
  switch (action.type) {
    case 'FETCH_CATEGORIES_REQUEST':
      return {
        categories: [],
        loading: true,
        error: null,
      };

    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        categories: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_CATEGORIES_FAILURE':
      return {
        categories: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.categoryList;
  }
}

export default updateCategoryList;