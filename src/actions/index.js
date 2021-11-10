// Products List
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

// Product Details
const productDetailsRequested = () => {
  return {
    type: 'FETCH_PRODUCT_DETAILS_REQUEST'
  }
}

const productDetailsLoaded = (newProduct, id) => {
  return {
    type: 'FETCH_PRODUCT_DETAILS_SUCCESS',
    payload: {newProduct, id}
  }
}

const productDetailsError = (error) => {
  return {
    type: 'FETCH_PRODUCT_DETAILS_FAILURE',
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

// Cart
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
export const cleanCart = () => {
  return {
    type: 'CLEAN_CART',
  }
}

// Request Get data
export const fetchProducts = (service) => (id) => (dispatch) => {
  dispatch(productsRequested());
  service.getProductsByCatId(id)
    .then((data) => dispatch(productsLoaded(data, id)))
    .catch((error) => dispatch(productsError(error)))
}

export const fetchProductDetails = (service) => (id) => (dispatch) => {
  dispatch(productDetailsRequested());
  service.getProductById(id)
    .then((data) => dispatch(productDetailsLoaded(data, id)))
    .catch((error) => dispatch(productDetailsError(error)))
}

export const fetchCategories = (storeService) => () => (dispatch) => {
  dispatch(categoriesRequested());
  storeService.getCategories()
    .then((data) => dispatch(categoriesLoaded(data)))
    .catch((error) => dispatch(categoriesError(error)))
}

export const setCurrentCat = (currentCatId) => {
  return {
    type: 'SET_CURRENT_CATEGORY',
    payload: currentCatId
  }
}