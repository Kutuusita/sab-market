import updateProductList from './product-list';
import updateCategoryList from './category-list';
import updateShoppingCart from './shopping-cart';
import updateCurrentCategory from './current-category';
import updateProduct from './product-details';

const reducer = (state, action) => {
  console.log(action.type,state)
  return {
    currentCategory: updateCurrentCategory(state, action),
    sourseUrl: 'https://market.sab-it.ru/',
    categoryList: updateCategoryList(state, action),
    productList: updateProductList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    product: updateProduct(state, action)
  }
};

export default reducer;