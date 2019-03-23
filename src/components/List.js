import React from 'react';

const List = ({ items, renderItem, emptyMessage, className }) => {
    if (!items.length) {
        return emptyMessage;
    }

    const renderedValues = items.map(item => {
        return renderItem(item);
    });

    return <div className={className || ''}>{renderedValues}</div>;
};

export default List;
