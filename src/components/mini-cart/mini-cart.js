import { connect } from 'react-redux';
import { cleanCart } from '../../actions';

import './mini-cart.scss';
import mini_cart_svg from './cart-icon.svg';

const MiniCart = (props) => {

  const { shoppingCart: {orderTotal}, cleanCart } = props;

  if (orderTotal > 0) {

    return (
      <div
      className="mini-cart">
        <img src={mini_cart_svg} alt="Корзина" />
        <span className="order-total">{ orderTotal.toLocaleString('ru-RU') } ₽</span>
        <button
        onClick={()=>cleanCart()}>
          Clean
        </button>
      </div>
    )
  }

  return null


}

const mapStateToProps = ({shoppingCart}) => {
  return { shoppingCart }
}

const mapDispatchToProps = (dispatch) => {
  return {
      cleanCart: () => dispatch(cleanCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);