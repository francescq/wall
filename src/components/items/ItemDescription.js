import React from 'react';

const Description = ({ item }) => {
    return (
        <React.Fragment>
            <div className="content">
                <div className="meta">{item.email}</div>
                <div className="description">{item.description}</div>
            </div>
            <div className="extra content">
                <span className="center floated">Price {item.price} €</span>
            </div>
        </React.Fragment>
    );
};

export default Description;
