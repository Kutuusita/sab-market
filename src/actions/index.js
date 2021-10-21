// Products
const productsRequested = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST'
  }
}

const productsLoaded = (newProducts, id) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: {newProducts, id}
  }
}

const productsError = (error) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error
  }
}

// Catetegory
const categoriesRequested = () => {
  return {
    type: 'FETCH_CATEGORIES_REQUEST'
  }
}

const categoriesLoaded = (newCategories) => {
  return {
    type: 'FETCH_CATEGORIES_SUCCESS',
    payload: newCategories
  }
}

const categoriesError = (error) => {
  return {
    type: 'FETCH_CATEGORIES_FAILURE',
    payload: error
  }
}

export const productAddedToCart = (productId) => {
  return {
    type: 'PRODUCT_ADDED_TO_CART',
    payload: productId
  }
}

export const productRemovedFromCart = (productId) => {
  return {
    type: 'PRODUCT_REMOVED_FROM_CART',
    payload: productId
  }
}

export const allProductsRemovedFromCart = (productId) => {
  return {
    type: 'ALL_PRODUCTS_REMOVED_FROM_CART',
    payload: productId
  }
}

export const fetchProducts = (service) => (id) => (dispatch) => {
  dispatch(productsRequested());
  service.getProductsByCatId(id)
    .then((data) => dispatch(productsLoaded(data, id)))
    .catch((error) => dispatch(productsError(error)))
}

export const fetchCategories = (storeService) => () => (dispatch) => {
  dispatch(categoriesRequested());
  storeService.getCategories()
    .then((data) => dispatch(categoriesLoaded(data)))
    .catch((error) => dispatch(categoriesError(error)))
}
