
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from '../../utils';
import { setCurrentCat } from '../../actions';

import './navigation.scss';

import svgPos from './main-category-icon--pos.svg';
import svgPo from './main-category-icon--po.svg';
import svgServices from './main-category-icon--services.svg';

const Navigation = (props) => {
  const { currentCategory = {id: '3'}, setCurrentCat, match, location, history } = props;

  const linksProps = [
    {
      id: '3',
      name: 'POS - Оборудование',
      href: svgPos + '#svg-pos',
      slug: 'pos'
    },
    {
      id: '40',
      name: 'ПО для бизнеса',
      href: svgPo + '#svg-po',
      slug: 'po'
    },
    {
      id: '187',
      name: 'САБ.Услуги',
      href: svgServices + "#svg-services",
      slug: 'services'
    },
  ]

  const links =  linksProps.map(({id, name, href, slug}) => {
      const activeClass = id === currentCategory.id ? 'active' : '';
      return (
        <Link
        key={slug}
        to={`/${id}`}
        onClick={()=>setCurrentCat(id)}
        className={`main-categories-card ${activeClass}`} id={`main-category-${slug}`}>
        <span className={`main-category-icon main-category-icon--${slug}`}>
          <svg>
            <use href={href}></use>
          </svg>
        </span>
        {name}
        </Link>
      )
    });

  return (
    <div className="main-categories d-flex justify-content-sb">
      {links}
    </div>
  )
}

const mapStateToProps = ({currentCategory}) => {
  return {currentCategory}
}

export default compose(
  withRouter,
  connect(mapStateToProps, { setCurrentCat })
)(Navigation);