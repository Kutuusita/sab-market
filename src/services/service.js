export default class Service {
  _apiBase = 'https://market.sab-it.ru/market/market_object_2.php';

  getResourse = async () => {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(`Не удалось получить данные` +
        `, ${res.status}`)
    }
    return await res.json();
  }
}