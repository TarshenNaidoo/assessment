import React, { useEffect, useState } from 'react';

function BeerMap({ beers }) {
  console.log(beers)
    return (
      <div>
        {beers.map(beer => (
          <div className="section-divider" key={beer.id}>
          <h2 className="section-divider">{beer.name}</h2>
          <p className="section-divider">{beer.tagline}</p>
          <p className="section-divider">First Brewed: {beer.first_brewed}</p>
          <p className="section-divider">Description: <br/> {beer.description}</p>
          <p className="section-divider">ABV: {beer.abv}</p>
          <p className="section-divider">IBU: {beer.ibu}</p>
          <p className="section-divider">Target FG: {beer.target_fg}</p>
          <p className="section-divider">Target OG: {beer.target_og}</p>
          <p className="section-divider">EBC: {beer.ebc}</p>
          <p className="section-divider">SRM: {beer.srm}</p>
          <p className="section-divider">pH: {beer.ph}</p>
          <p className="section-divider">
            Volume: {beer.volume && beer.volume.value} {beer.volume && beer.volume.unit}
          </p>
          <p className="section-divider">
            Boil Volume: {beer.boil_volume && beer.boil_volume.value} {beer.boil_volume && beer.boil_volume.unit}
          </p>
          <div className="section-divider">
          <p>Method:</p>
          {beer.method &&
            Object.entries(beer.method).map(([key, value]) => (
              <div key={key}>
                <p>{key}:</p>
                {value === null ? (
                  <p>pause</p>
                ) : Array.isArray(value) ? (
                  value.map((item, index) => (
                    <div key={index}>
                      {item && typeof item === "object" && (
                        <>
                          <p>
                            temperature: {item.temp.value} {item.temp.unit}
                          </p>
                        </>
                      )}
                    </div>
                  ))
                ) : (
                  <>
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <p key={subKey}>
                      {subKey}: {subValue && subValue.unit}, {subValue && subValue.value}
                    </p>
                  ))}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="section-divider">
            <p>Ingredients:</p>
            {beer.ingredients &&
              Object.entries(beer.ingredients).map(([key, value]) => (
                <div key={key}>
                <p>{key}:</p>
                  {Array.isArray(value) ? (
                    value.map((ingredient, index) => (
                      <div key={index}>
                        {typeof ingredient === "object" ? (
                          <>
                            <p>
                              Name: {ingredient.name}, Amount: {ingredient.amount.value} {ingredient.amount.unit}
                            </p>
                            <p>Add: {ingredient.add}, Attribute: {ingredient.attribute}</p>
                          </>
                        ) : (
                          <p>{ingredient}</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              ))}
          </div>
          <div className="section-divider">
            <p>Food Pairing:</p>
            {beer.food_pairing &&
              beer.food_pairing.map((pairing, index) => (
                <p key={index}>{pairing}</p>
              ))}
          </div>
          <p className="section-divider">Brewers Tips: {beer.brewers_tips}</p>
          <p className="section-divider">Attenuation Level: {beer.attenuation_level}</p>
          <p className="section-divider">Contributed By: {beer.contributed_by}</p>
        </div>
        ))}
      </div>
    );
}

function  BeerItem({beerId}) {

    const [beers, setBeers] = useState(null);

    useEffect(() => {

      if (beerId < 0) {
        fetch('https://localhost:7104/beer/random')
          .then(response => response.json())
          .then(data => setBeers(data))
          .catch(error => console.log(error));
      } else {
        fetch('https://localhost:7104/beer/' + beerId)
          .then(response => response.json())
          .then(data => setBeers(data))
          .catch(error => console.log(error));
      }
    }, [beerId]);

    if (beers === null) {
      // Render a loading indicator or placeholder
      console.log('loading')
      return <div>Loading...</div>;
    }

    return (
        <div>
        <h1>Beer Item</h1>
        <BeerMap beers={beers} />
        </div>
    );
}

export default BeerItem;