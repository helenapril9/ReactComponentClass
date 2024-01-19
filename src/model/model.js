export default class ItemModel {
    constructor({brand, title, description, descriptionFull, currency, price})
     {
      this.brand = brand;
      this.title = title;
      this.description = description;
      this.descriptionFull = descriptionFull;
      this.currency = currency;
      this.price = price;
    }
    ShopItemFunc(ItemSample) {
        return (
        <div className="main-content">
            <h2>{ItemSample.brand}</h2>
            <h1>{ItemSample.title}</h1>
            <h3>{ItemSample.description}</h3>
            <div className="description">{ItemSample.descriptionFull}</div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"></div>
            </div>
            <div className="divider"></div>
            <div className="purchase-info">
                <div className="price">{ItemSample.currency}{ItemSample.price.toFixed(2)}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
        )
    };
  }