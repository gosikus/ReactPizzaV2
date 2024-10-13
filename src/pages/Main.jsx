import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <main className="main__content">
      <p className="main__subtitle">
        Магазин года по версии <span className="main__subtitle--bold">Vogueue</span>
      </p>
      <p className="main__slogan">Индивидуальность в каждой детали</p>

      <Link to={`/catalog`} className="main__link">
        смотреть
      </Link>
    </main>
  );
};
export default Main;
