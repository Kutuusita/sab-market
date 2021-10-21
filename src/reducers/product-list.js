const updateProductList = (state, action) => {
  if (state === undefined) {
    return {
      products: [],
      categoryId: null,
      loading: true,
      error: null,
    }
  }
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        products: [],
        categoryId: null,
        loading: true,
        error: null,
      };

    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        products: action.payload.newProducts,
        categoryId: action.payload.id,
        loading: false,
        error: null,
      };

    case 'FETCH_PRODUCTS_FAILURE':
      return {
        products: [],
        categoryId: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state.productList;
  }
}

export default updateProductList;