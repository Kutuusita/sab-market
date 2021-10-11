import './catalog.scss';
import svgPos from '../../img/main-category-icon--pos.svg';
import svgPo from '../../img/main-category-icon--po.svg';
import svgServices from '../../img/main-category-icon--services.svg';

// import Service from '../../services/service';

import CategoryCard from '../category-card';

const Catalog = () => {

  // const reqService = new Service();
  // const result = reqService.getResourse();
  // console.log(result);

  const service = {
    1:{
      id: 1,
      image_url: 'https://market.sab-it.ru/images/virtuemart/category/rnkb-cat.jpg',
      title: 'Онлайн-касса РНКБ',
    },
    2:{
      id: 2,
      image_url: 'https://market.sab-it.ru/images/virtuemart/category/evotor_7_2_1.jpg',
      title: 'Смарт-терминал Эвотор',
    },
    3:{
      id: 3,
      image_url: 'https://market.sab-it.ru/images/virtuemart/category/sigma_cat_1.jpg',
      title: 'Смарт-терминал SIGMA',
    },
    4:{
      id: 4,
      image_url: 'https://market.sab-it.ru/images/virtuemart/category/stacionarnie_online_kassi.jpg',
      title: 'Фискальный регистратор',
    },
    5:{
      id: 5,
      image_url: 'https://market.sab-it.ru/images/virtuemart/category/stacionarnie_online_kassi.jpg',
      title: 'Автономная онлайн-касса',
    }
  }

  const categoryCards = Object.values(service).map(item => {
    return (
      <CategoryCard data={ item } key={ item.id } />
    )
  })

  return (
    <div className="catalog">
      <div className="main-categoties d-flex justify-content-sb">
        <button className="main-categories-card active" id="main-category-pos">
          <span className="main-category-icon main-category-icon--pos">
            <svg>
              <use href={svgPos + '#svg-pos'}></use>
            </svg>
          </span>
          POS - Оборудование
          </button>
        <button className="main-categories-card" id="main-category-po">
          <span className="main-category-icon main-category-icon--po">
            <svg>
              <use href={svgPo + "#svg-po"}></use>
            </svg>
          </span>
          ПО для бизнеса
          </button>
        <button className="main-categories-card" id="main-category-services">
          <span className="main-category-icon main-category-icon--services">
            <svg>
              <use href={svgServices + "#svg-services"}></use>
            </svg>
          </span>
          САБ.Услуги
          </button>
      </div>
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

export default Catalog;