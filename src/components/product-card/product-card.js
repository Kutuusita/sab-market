import './product-card.scss';

import { connect } from 'react-redux';
import { productAddedToCart } from '../../actions';

import productImg from './product-card.jpg';

const ProductCard = (props) => {
    let { data: { file_url, product_name, product_price_f, product_override_price, sab_price, virtuemart_category_id, product_box, virtuemart_product_id }, sourseUrl, onItemSelected, onAddedToCart, cartItems } = props;
    let productBox = '';
    let productOverridePrice;
    let productPrice;
    let priceTemplate = (el) => (el);

    switch (product_box) {
        case 'мес':
        case 'мес.':
        case 'год':
        case 'кв.':
        case 'кв':
        case 'шт':
        case 'шт.':
            productBox = `/${product_box}`;
            priceTemplate = (price, box = '') => (`${price} ₽${box}`)
            break;
        case 'от':
            productBox = product_box;
            priceTemplate = (price, box = '') => (`${box} ${price} ₽`)
            break;
        default:
            priceTemplate = (price, box = '') => (`${price} ₽${box}`)
            break;
    }

    if ( product_override_price && product_override_price !== product_price_f && !sab_price) {
        const salePrice = product_override_price.toLocaleString('ru-RU');
        const basePrice = product_price_f.toLocaleString('ru-RU');
        productPrice = priceTemplate(salePrice, productBox);
        productOverridePrice = (<div className="product-card__price--sale"><span className="price">{priceTemplate(basePrice, productBox)}</span></div>);
    } else {
        const basePrice = product_price_f.toLocaleString('ru-RU');
        productPrice = priceTemplate(basePrice, productBox);
        productOverridePrice = sab_price ? (<div className="product-card__price--sab"><span className="price">{priceTemplate(sab_price.toLocaleString('ru-RU'), productBox)} </span><span>с подпиской САБ.Плюс</span></div>) : null;
    }
    if (virtuemart_category_id === '220' && product_price_f === 0) {
        productPrice = 'Цена по запросу';
    } else if (product_price_f === 0) {
        productPrice = 'Бесплатно';
    }

    if (sab_price && sab_price === 3) {
        productOverridePrice = (<div className="product-card__price--sab"><span className="price">Бесплатно </span><span>с подпиской САБ.Плюс</span></div>);
    }

    const adddedToCart = cartItems.findIndex(({id}) => id === virtuemart_product_id) !== -1 ? true : false;

    let btnClasses = 'add-to-cart'
    if (adddedToCart) {
        btnClasses += ' added';
    }

    return (
        <div

            className="product-card">
            <div className="product-card__image">
                <img src={file_url ? sourseUrl + file_url : productImg} alt={product_name} />
            </div>
            <div
            onClick={ () => onItemSelected(virtuemart_product_id) }
            className="product-card__name">
                {product_name}
            </div>

            <button
            onClick={() => onAddedToCart(virtuemart_product_id)}
            className={btnClasses}>
                Добавить в корзину
            </button>

            <div className="product-card__price">
                <div className="product-card__price--base">
                    {productPrice}
                </div>
                {productOverridePrice}
            </div>
        </div>
    )
}

const mapStateToProps = ({sourseUrl, shoppingCart: { cartItems }}) => {
    return { sourseUrl, cartItems }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToCart: (productId) => dispatch(productAddedToCart(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);