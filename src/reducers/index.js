import updateProductList from './product-list';
import updateCategoryList from './category-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  console.log(action.type,state)
  return {
    categoryList: updateCategoryList(state, action),
    productList: updateProductList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
};

export default reducer;