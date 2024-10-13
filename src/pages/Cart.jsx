const Cart = () => {
  return (
    <div
    //  className="wrapper"
     >
      <button className="button cart__button-delete">очистить</button>
      <div className="cart__container">
        <div className="cart__item">
          <div className="cart__item-wrapper">
            <img
              className="cart__item-img"
              src="https://ae04.alicdn.com/kf/Saa2ec6a4a3404734915c6af3c66527b4a.jpg_480x480.jpg"
              alt="футболка"
            />
            <div className="cart__item-info">
              <h2 className="cart__item-name">юбка</h2>
              <div className="cart__item-counter">
                <button className="button cart__button-num">-</button>
                <span className="cart__span-items">1</span>
                <button className="button cart__button-num">+</button>
              </div>
            </div>
          </div>

          <button className="button  cart__button-buy ">оплатить</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
