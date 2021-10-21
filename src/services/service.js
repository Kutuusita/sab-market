export default class Service {
  _apiBase = 'https://market.sab-it.ru/market/market_object_2.php';
  headers = {'Origin': 'http://localhost:3000/'};

  getResourse = async (type) => {
    const res = await fetch(`${this._apiBase}?type=${type}`, {
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
    return item.virtuemart_category_id === cat_id ? item : false;
  }
}