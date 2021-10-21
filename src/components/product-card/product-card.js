import './product-card.scss';


import productImg from './product-card.jpg';

const ProductCard = (props) => {
    const { data } = props;
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={data.image_url ? data.image_url : productImg} alt={data.product_name} />
            </div>
            <div className="product-card__name">
                {data.product_name}
            </div>

            <button className="add-to-cart">Добавить в корзину</button>

            <div className="product-card__price">
                <div className="product-card__price--base">
                    {data.product_price} ₽
                </div>
                <div className="product-card__price--sale">
                    <span className="price">{data.product_price} ₽ </span><span>с подпиской САБ.Плюс</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;