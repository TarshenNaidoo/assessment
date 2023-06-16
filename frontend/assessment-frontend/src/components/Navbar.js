import React, { useState } from 'react';
import BeerItem from './Beer/beerItem';
import BeerList from './Beer/beerList';
import './Navbar.css'

function Navbar() {
    const [showBeerList, setShowBeerList] = useState(true);
    const [beerId, setBeerId] = useState(null);

    const setBeerItem = (id) => {
        setBeerId(id);
    }

    const toggleBeerList = () => {
        setShowBeerList(true);
        setBeerId(null);
    }

    const toggleRandomBeer = () => {
        setShowBeerList(true);
        setBeerId(-1);
    }

    const closeModal = () => {
      setBeerId(null);
    };
    
    return (
        <div className="navbar">
            <div>
            <button onClick={() => toggleBeerList()}>Beer List</button>
            <button onClick={() => toggleRandomBeer()}>Random Beer</button>
            <button onClick={() => setShowBeerList(false)}>Search</button>
            <p>Selected Button: {showBeerList !== null ? showBeerList : 'None'}</p>
            </div>
            <div>
                {showBeerList && <BeerList setBeerItem={setBeerItem} />}
                {beerId && (
                    <div className="overlay">
                        <div className="modal">
                            <button className="close-button" onClick={closeModal}>
                            Close
                            </button>
                            <div className="modal-content">
                            <BeerItem beerId={beerId} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;