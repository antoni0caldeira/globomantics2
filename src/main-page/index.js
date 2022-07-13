import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './Header';
import FeaturedHouse from './featureHouse';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';

function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouse = async () => {
      const response = await fetch('/houses.json');
      const houses = await response.json();
      setAllHouses(houses);
    };
    fetchHouse();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container"> 
        <Header subtitle="Providing Hos all over the world" />
        <HouseFilter allHouses={allHouses} />
        <Switch>
          <Route path ="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>
          <Route path="/">
            <FeaturedHouse house={featuredHouse}> </FeaturedHouse>
          </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
