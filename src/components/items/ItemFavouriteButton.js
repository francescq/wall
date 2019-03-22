import React from 'react';

const ItemFavouriteButton = ({ isFav, onStarClick }) => {
    return (
        <div
            className={`ui bottom attached button ${
                isFav ? 'negative' : 'primary'
            }`}
            onClick={onStarClick}
        >
            <i className={`${isFav ? 'minus' : 'add'} icon`} />
            {isFav ? 'Remove from favourites' : 'Add to favourites'}
        </div>
    );
};

export default ItemFavouriteButton;
