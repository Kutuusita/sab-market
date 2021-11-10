const updateProduct = (state, action) => {
  if (state === undefined) {
    return {
      product: [],
      productId: null,
      loading: true,
      error: null,
    }
  }
  switch (action.type) {
    case 'FETCH_PRODUCT_DETAILS_REQUEST':
      return {
        product: [],
        productId: null,
        loading: true,
        error: null,
      };

    case 'FETCH_PRODUCT_DETAILS_SUCCESS':
      return {
        product: action.payload.newProduct,
        productId: action.payload.id,
        loading: false,
        error: null,
      };

    case 'FETCH_PRODUCT_DETAILS_FAILURE':
      return {
        product: [],
        productId: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state.product;
  }
}

export default updateProduct;