const updateCartTotal = (cartItems) => {

  return cartItems.reduce((acc, item) => acc + item.total, 0)
}
const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx +  1)
    ]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx +  1)
  ]
}

const updateCartItem = (product, item = {}, quantity) => {

  const {
    id = product.virtuemart_product_id,
    count = 0,
    title = product.product_name,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * product.product_price_f,
  }
}

const updateOrder = (state, productId, quantity) => {
  const { productList: { products }, shoppingCart: { cartItems } } = state;
  const product = products.find(({virtuemart_product_id}) => virtuemart_product_id === productId);
  const itemIndex = cartItems.findIndex(({id}) => id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(product, item, quantity);

  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: updateCartTotal(updateCartItems(cartItems, newItem, itemIndex)),
  };
}

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    }
  }
  switch (action.type) {
    case 'PRODUCT_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'PRODUCT_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_PRODUCTS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count)

    case 'CLEAN_CART':
      return {
        cartItems: [],
        orderTotal: 0,
      }

    default:
      return state.shoppingCart;
  }
}

export default updateShoppingCart;