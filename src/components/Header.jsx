import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Link to={`/`}>
          <h1 className="logo header__logo">Urban Flair</h1>
        </Link>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link to={`/`} className="header__menu-link">
                главная
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={`/catalog`} className="header__menu-link">
                каталог
              </Link>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                контакты
              </a>
            </li>
            <li className="header__menu-item">
              <Link to={`/cart`} className="header__menu-link">
                корзина
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
