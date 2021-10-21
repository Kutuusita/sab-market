import './navigation.scss';

import svgPos from './main-category-icon--pos.svg';
import svgPo from './main-category-icon--po.svg';
import svgServices from './main-category-icon--services.svg';

const Navigation = () => {
  return (
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
  )
}

export default Navigation;