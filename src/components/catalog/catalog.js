import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import compose from '../../utils';
import withStoreService from '../hoc/with-store-service';
import { fetchCategories } from '../../actions';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import CategoryCard from '../category-card';

import './catalog.scss';

class Catalog extends Component {


  componentDidMount() {
    if (!this.props.categories.length) {
      this.props.fetchCategories();
    }
  }



  render() {

    const { categories, loading, error, history } = this.props;
    const categoryCards = categories.map(item => {
      const { virtuemart_category_id: catId } = item;
      return (
        <CategoryCard
            onItemSelected={ (catId) => {
              history.push(`/category/${catId}`)
            }}
            data={ item }
            key={ catId }  />
      )
    });

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


      return (
        <div className="catalog">
        <div className="categories-section">
          <div className="section-title">Работа с 54-ФЗ</div>
          <div className="category-card-list d-flex flex-wrap">
            {categoryCards}
          </div>
        </div>
        <div className="categories-section">
          <div className="section-title">POS-Оборудование</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({categoryList: {categories, loading, error}}) => {
  return { categories, loading, error }
}

const mapDispatchToProps = (dispatch, { storeService }) => {
  return bindActionCreators({
    fetchCategories: fetchCategories(storeService),
  }, dispatch)
}


export default compose(
  withRouter,
  withStoreService(),
  connect(mapStateToProps,mapDispatchToProps)
)(Catalog);