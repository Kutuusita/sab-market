export default class Service {
  _apiBase = 'https://market.sab-it.ru/market/market_object_2.php';
  // headers = {'Origin': 'http://localhost:3000/'};
  headers = {'Origin': 'https://kutuusita.github.io/'};

  getResourse = async (type, id) => {
    const url = id ? `${this._apiBase}?type=${type}&id=${id}`:`${this._apiBase}?type=${type}`;
    const res = await fetch(url, {
      method : "GET",
      mode: 'cors',
      headers: this.headers
    });

    if (!res.ok) {
      throw new Error(`Не удалось получить данные` +
        `, ${res.status}`)
    }

    return await res.json();
  }

  getProductsByCatId = async (cat_id) => {
    const res = await this.getResourse('products');
    return res.filter(item => this._filterProducts(item, cat_id));
  }

  getProductById = async (prod_id) => {
    const res = await this.getResourse('product', prod_id);
    return res;
  }

  getCategories = async () => {
    const res = await this.getResourse('category');
    return res;
  }

  getCategoryById = async (cat_id) => {
    const res = await this.getResourse('category');
    return res.find(item => this._filterProducts(item, cat_id));
  }
  _filterProducts = (item = {}, cat_id = '0') => {
    if (!item && !item.length) return false;
    return item.virtuemart_category_id.indexOf(cat_id) !== -1 ? item : false;
  }
}