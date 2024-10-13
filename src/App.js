import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Categories from './components/Categories';
import Card from './components/Card';
import Sort from './components/Sort';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { useContext } from 'react';


function App() {
  // const CardContext = React.createContext({});
  // const [sort,setSort] = React.useState("популярности")
  // const [category, setCategory] = React.useState(0);

  return (
    <div className="container">
      <Header />
      <div className="wrapper wrapper__content">
        {/* <CardContext.Provider value={(sort, category)}> */}
          <Outlet />
        {/* </CardContext.Provider> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
