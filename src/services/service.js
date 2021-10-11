export default class Service {
  _apiBase = 'https://market.sab-it.ru/market/market_object_2.php';
  headers = {'Origin': 'http://localhost:3000/'};

  getResourse = async () => {
    const res = await fetch(`${this._apiBase}`, {
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
}