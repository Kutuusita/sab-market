import './product-card.scss';

const ProductCard = (props) => {
    const { data } = props;
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={data.image_url} alt={data.title} />
            </div>
            <div className="product-card__name">
                {data.title}
            </div>

            <button className="add-to-cart">Добавить в корзину</button>
            
            <div className="product-card__price">
                <div className="product-card__price--base">
                    {data.price_base} ₽
                </div>
                <div className="product-card__price--sale">
                    <span className="price">{data.price_sale} ₽ </span><span>с подпиской САБ.Плюс</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;