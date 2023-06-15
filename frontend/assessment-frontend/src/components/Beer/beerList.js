import React, { useEffect, useState } from 'react';

function BeerMap({ beers, setBeerItem }) {
  const handleBeerClick = (beerId) => {
    setBeerItem(beerId);
  };
  return (
    <div>
      {beers.map((beer) => (
        <div
          className="section-divider"
          key={beer.id}
          onClick={() => handleBeerClick(beer.id)}
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
      ))}
    </div>
  );
}

function BeerList({ setBeerItem }) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7104/beer')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Beer List</h1>
      <BeerMap beers={beers} setBeerItem={setBeerItem} />
    </div>
  );
}

export default BeerList;