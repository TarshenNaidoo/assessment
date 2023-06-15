import React, { useState } from 'react';
import BeerItem from './Beer/beerItem';
import BeerList from './Beer/beerList';
import './Navbar.css'

function Navbar() {
    const [page, setPage] = useState(0);
    const [beerId, setBeerId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (index) => {
        setPage(index);
        setBeerId(null)
    };

    const setBeerItem = (id) => {
        setBeerId(id);
    }

    const handleIsLoading = (loadingState) => {
        setIsLoading(loadingState);
    }

    const closeModal = () => {
      setBeerId(null);
    };
    
    return (
        <div>
            <div>
            <button onClick={() => handleClick(0)}>Beer List</button>
            <button onClick={() => handleClick(1)}>Random Beer</button>
            <button onClick={() => handleClick(2)}>Search</button>
            <p>Selected Button: {page !== null ? page : 'None'}</p>
            </div>
            <div>
                {page === 0 && <BeerList setIsLoading={handleIsLoading} setBeerItem={setBeerItem} />}
                {beerId && (
                    <div className="overlay">
                        <div className="modal">
                            <button className="close-button" onClick={closeModal}>
                            Close
                            </button>
                            <div className="modal-content">
                            <BeerItem setIsLoading={handleIsLoading} beerId={beerId} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;