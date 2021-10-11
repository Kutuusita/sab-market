import './category.scss';
import productImg from '../../img/product-card.jpg';

import ProductCard from '../product-card';

const Category = () => {

    const service = {
        1:{
          id: 1,
          image_url: productImg,
          title: 'Смарт-терминал Эвотор 5',
          price_base: '15 500',
          price_sale: '15 000',
        },
        2:{
          id: 2,
          image_url: productImg,
          title: 'Смарт-терминал Эвотор 7.2',
          price_base: '18 500',
          price_sale: '18 000',
        },
        3:{
          id: 3,
          image_url: productImg,
          title: 'Смарт-терминал Эвотор 7.3',
          price_base: '21 500',
          price_sale: '21 000',
        },
        4:{
          id: 4,
          image_url: productImg,
          title: 'Смарт-терминал Эвотор 10',
          price_base: '24 700',
          price_sale: '24 300',
        },
    }

    const productCards = Object.values(service).map(item => {
        return (
            <ProductCard data={ item } key={ item.id } />
        )
    });
    
    return (
        <div className="category">
            <div className="breadcrumbs">
              <a href="#" className="back-link">Назад</a>
              <a href="#" className="breadcrumbs__link">Онлайн-кассы Эвотор</a>
            </div>

            <div className="section-title">Смарт-терминал Эвотор</div>
            <div className="products-list d-flex flex-wrap">
                { productCards }
            </div>
        </div>
    );
}

export default Category;