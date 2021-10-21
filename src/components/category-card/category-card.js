import './category-card.scss';

const CategoryCard = (props) => {
  const { data, onItemSelected } = props;
  const { virtuemart_category_id: catId, file_url, category_name } = data;

  return (
    <div
    onClick={ () => onItemSelected(catId) }
    className="category-card" id={catId}>
      <div className="category-card__image">
        <img src={`https://market.sab-it.ru/${file_url}`} alt={category_name} />
      </div>
      <div className="category-card__name">
        {category_name}
      </div>
    </div>
  )
};

export default CategoryCard;