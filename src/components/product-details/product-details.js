import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import compose from '../../utils';
import withStoreService from '../hoc/with-store-service';
import { fetchProductDetails, productAddedToCart } from '../../actions';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import productImg from '../product-card/product-card.jpg';
import './product-details.scss';

class ProductDetails extends Component {
  componentDidMount() {
    if (this.props.productId !== this.props.itemId) {
      this.props.fetchProductDetails(this.props.itemId);
    };
  }

  render() {
    const { itemId, products, product, categories, loading, error, sourseUrl, currentCategory, onAddedToCart, cartItems } = this.props;



    if (error) {
      return (
        <ErrorIndicator />
      )
    };
    if(loading) {
      return (
          <Spinner />
        )
    };


    const { virtuemart_category_id, product_name, product_specifications, product_s_desc  } = product;

    const findParentCat = (item = {}, cat_id = '0') => {
      if (!item && !item.length) return false;
      return item.virtuemart_category_id === cat_id ? item : false;
    }
    const findProduct = (item = {}, prod_id = '0') => {
      if (!item && !item.length) return false;
      return item.virtuemart_product_id === prod_id ? item : false;
    }

    const { category_name = null, category_parent_id = null} = categories.find(item => findParentCat(item, virtuemart_category_id));
    const { file_url, product_price_f, product_override_price, sab_price, product_box} = products.find(item => findProduct(item, itemId));

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
            priceTemplate = (price, box = '') => (<>{price} <span className="symbol">₽{box}</span></>)
            break;
        case 'от':
            productBox = product_box;
            priceTemplate = (price, box = '') => (<><span className="symbol">{box}</span> {price} <span className="symbol">₽</span></>)
            break;
        default:
            priceTemplate = (price, box = '') => (<>{price} <span className="symbol">₽{box}</span></>)
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


    let productSpecifications = null;
    if (product_specifications) {
      productSpecifications = (
        <div
        className="product-specifications">
          <div className="specifications-title h2">
            Характеристики
          </div>
          <div className="specifications" dangerouslySetInnerHTML={{ __html: product_specifications }}></div>
        </div>
      );
    }

    let productSDesc = null;
    if (product_s_desc) {
      productSDesc = (
        <div
        className="product-s-desc">
          <div className="specifications" dangerouslySetInnerHTML={{ __html: product_s_desc }}></div>
        </div>
      );
    }

    let productFeutures = null;
    if (currentCategory.id === '187') {
      productFeutures = (<>
      <ul className="product__feutures">
        <li className="work_time">Работаем ежедневно, 9:00-18:00</li>
        <li className="delivery">Работаем по Р.Крым и г.Севастополь</li>
        <li className="any_tasks">В зависимости от вашей задачи, можем работать <br /> удалённо или приехать в ваш город</li>
      </ul>
      </>)
    } else {
      productFeutures = (<>
      <ul className="product__feutures">
        <li className="work_time">Работаем ежедневно, 9:00-18:00</li>
        <li className="delivery">Бесплатная доставка до 5 дней.</li>
      </ul>
      </>)
    }

    let btnClasses = 'btn product__btn';
    let btnText = 'Добавить в корзину';
    if (cartItems.length) {
      const { count = 0 } = cartItems.find(({id}) => id === itemId) || {};
      const adddedToCart = cartItems.findIndex(({id}) => id === itemId) !== -1 ? true : false;
      if (adddedToCart) {
        btnClasses += ' added';
        btnText = `В корзине ${count} шт.`;
      }
    }


    return (
      <div
      className="product-details">
        <div className="breadcrumbs">
            <Link to={`/${category_parent_id}`} className="back-link">Назад</Link>
            <Link to={`/category/${virtuemart_category_id}`} className="breadcrumbs__link">{ category_name }</Link>
            <div className="breadcrumbs__link">{ product_name }</div>
        </div>
        <div className="section-title">{ product_name }</div>
        <div className="product-wrap">
          <div className="product__image">
            <img src={file_url ? sourseUrl + file_url : productImg} alt={product_name} />
          </div>
          <div className="product__info">
            <div className="product__price">
              <div className="product__price--base">
                  {productPrice}
              </div>
              {productOverridePrice}
            </div>
            {productFeutures}
            {productSDesc}
            <button
            onClick={()=>onAddedToCart(itemId)}
            className={btnClasses}>
              {btnText}
            </button>
          </div>
        </div>
        {productSpecifications}
      </div>
    )
  }
}

const mapStateToProps = ({productList: {products}, product: {product, productId, loading, error}, categoryList: {categories}, sourseUrl, currentCategory, shoppingCart:{cartItems}}) => {
  return { products, categories, product, productId, loading, error, sourseUrl, currentCategory,cartItems }
}

const mapDispatchToProps = (dispatch, { storeService }) => {
  return bindActionCreators({
    fetchProductDetails: fetchProductDetails(storeService),
    onAddedToCart: (productId) => productAddedToCart(productId),
  }, dispatch)
}

export default compose(
  withRouter,
  withStoreService(),
  connect(mapStateToProps,mapDispatchToProps)
)(ProductDetails);