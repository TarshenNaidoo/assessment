import React, { useEffect, useState, useCallback  } from 'react';
import './beer.css';

function BeerMap({ beers, setBeerItem }) {
  const [hoveredBeerId, setHoveredBeerId] = useState(null);

  const handleBeerClick = useCallback((beerId) => {
    setBeerItem(beerId);
  }, [setBeerItem]);

  const handleMouseEnter = useCallback((beerId) => {
    setHoveredBeerId(beerId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredBeerId(null);
  }, []);

  return (
    <div>
      {beers.map((beer) => (
        <div className="beer-card-parent"
        key={beer.id}
        onMouseEnter={() => handleMouseEnter(beer.id)}
        onMouseLeave={handleMouseLeave}
        >
          <div
            className="beer-card"
            onClick={() => handleBeerClick(beer.id)}
            style={{ width: hoveredBeerId === beer.id ? '100%' : '100%'}}
          >
            <h2 className="section-divider">{beer.name}</h2>
            <p className="section-divider">{beer.tagline}</p>
            <p className="section-divider">First Brewed: {beer.first_brewed}</p>
            <p className="section-divider">
              Description: <br /> {beer.description}
            </p>
            <p className="section-divider">
              Contributed By: {beer.contributed_by}
            </p>
          </div>
          <br/>
        </div>
      ))}
    </div>
  );
}

function BeerList({ setBeerItem, searchQuery }) {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  useEffect(() => {

    if (searchQuery !== '' && searchQuery !== undefined) {
      console.log('running search term');
      fetch('https://localhost:7104/search' + '?query=' + searchQuery)
        .then((response) => response.json())
        .then((data) => setBeers(data))
        .catch((error) => console.log(error));
    } else {
      console.log('fetching whole list');
      fetch('https://localhost:7104/beer')
        .then((response) => response.json())
        .then((data) => setBeers(data))
        .catch((error) => console.log(error));
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Beer List</h1>
      <BeerMap beers={beers} setBeerItem={setBeerItem} />
    </div>
  );
}

export default BeerList;