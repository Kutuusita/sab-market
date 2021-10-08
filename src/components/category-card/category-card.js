import './category-card.scss';

const CategoryCard = (props) => {
  // const service = {
  //   {
  //     id: 1,
  //     image_url: '',
  //     title: 'Онлайн-касса РНКБ',
  //   },
  //   {
  //     id: 2,
  //     image_url: '',
  //     title: 'Онлайн-касса РНКБ',
  //   }
  // };
  const { data } = props;


  return (
    <div className="category-card" id="someId">
      <div className="category-card__image">
        <img src={data.image_url} alt={data.title} />
      </div>
      <div className="category-card__name">
        {data.title}
      </div>
    </div>
  )
};

export default CategoryCard;