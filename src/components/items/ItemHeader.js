import React from 'react';

const Header = ({ item, isFav }) => {
    return (
        <React.Fragment>
            <div className="image">
                <img src={`/images/${item.image}`} />
            </div>
            <div className="content">
                <span className="header">
                    {item.title}
                    <span className="right floated">
                        <i
                            className={`star icon ${
                                isFav ? 'is_favourite' : ''
                            }`}
                        />
                    </span>
                </span>
            </div>
        </React.Fragment>
    );
};

export default Header;
