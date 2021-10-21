import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import compose from '../../utils';
import withStoreService from '../hoc/with-store-service';
import { fetchProducts } from '../../actions';

import Service from '../../services/service';
import ProductCard from '../product-card';

import './category.scss';

class Category extends Component {

  state = {
    data: [],
    cat: {},
  }

  service = new Service();

  componentDidMount() {
    if (this.props.categoryId !== this.props.itemId) {
      this.props.fetchProducts(this.props.itemId);
    };
  }

  render() {

    const filterProducts = (item = {}, cat_id = '0') => {
      if (!item && !item.length) return false;
      return item.virtuemart_category_id === cat_id ? item : false;
    }

    const { categories, products, loading, error, itemId  } = this.props;
    const productCardsReq = products.map(item => {
      return (
        <ProductCard data={ item } key={ item.virtuemart_product_id } />
        )
    });

    const { category_name } = categories.find(item => filterProducts(item, itemId));

    return (
      <div className="category">
          <div className="breadcrumbs">
            <Link to="/" className="back-link">Назад</Link>
            <div className="breadcrumbs__link">{ category_name }</div>
          </div>

          <div className="section-title">{ category_name }</div>
          <div className="products-list d-flex flex-wrap">
              { productCardsReq }
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({productList: {products, categoryId, loading, error}, categoryList: {categories}}) => {
  return { categories, products, categoryId, loading, error }
}

const mapDispatchToProps = (dispatch, { storeService }) => {
  return bindActionCreators({
    fetchProducts: fetchProducts(storeService),
  }, dispatch)
}

export default compose(
  withRouter,
  withStoreService(),
  connect(mapStateToProps,mapDispatchToProps)
)(Category);