import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

    const { categories, loading, error, history, itemId = 0 } = this.props;

    let categoryTitle = '';

    switch(itemId) {
      case '2':
        categoryTitle = 'Работа с 54-ФЗ';
        break;
      case '187':
        categoryTitle = 'САБ.Услуги';
        break;
      case '3':
        categoryTitle = 'POS-Оборудование';
        break;
      case '40':
        categoryTitle = 'ПО для бизнеса';
        break;
      default:
    }

    const categoryCards = categories.map(item => {
      const { virtuemart_category_id: catId, category_parent_id } = item;
      if (category_parent_id === itemId || itemId === 0) {
        return (
          <CategoryCard
              onItemSelected={ (catId) => {
                history.push(`/category/${catId}`)
              }}
              data={ item }
              key={ catId }  />
        )
      }
      return null;
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
          <div className="section-title">{categoryTitle}</div>
          <div className="category-card-list d-flex flex-wrap">
            {categoryCards}
          </div>
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