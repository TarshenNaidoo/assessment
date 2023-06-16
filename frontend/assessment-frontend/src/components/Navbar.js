import React, { useState } from 'react';
import BeerItem from './Beer/beerItem';
import BeerList from './Beer/beerList';
import Searchbar from './searchbar';
import './Navbar.css'

function Navbar() {
    const [showBeerList, setShowBeerList] = useState(true);
    const [beerId, setBeerId] = useState(null);
    const [displaySearch, setDisplaySearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const setBeerItem = (id) => {
        setBeerId(id);
    }

    const toggleBeerList = () => {
        setShowBeerList(true);
        setBeerId(null);
        setDisplaySearch(false);
        setSearchQuery('')
    }

    const toggleRandomBeer = () => {
        setShowBeerList(true);
        setBeerId(-1);
    }

    const closeModal = () => {
      setBeerId(null);
    };
    
    const handleSetSearchQuery = (query) => {
        console.log('set state');
        setSearchQuery(query);
        setBeerId(null);
    }
    
    
    return (
        <div className="navbar">
            <div>
            <button onClick={() => toggleBeerList()}>Beer List</button>
            <button onClick={() => toggleRandomBeer()}>Random Beer</button>
            <button onClick={() => setDisplaySearch(true)}>Search</button>
            <p>Selected Button: {showBeerList !== null ? showBeerList : 'None'}</p>
            {displaySearch && <Searchbar setSearchQuery={handleSetSearchQuery} searchQuery={searchQuery}></Searchbar>}
            </div>
            <div>
                {showBeerList && <BeerList setBeerItem={setBeerItem} searchQuery={searchQuery}/>}
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