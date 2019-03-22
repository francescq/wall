const List = ({ items, renderItem, emptyMessage }) => {
    if (!items.length) {
        return emptyMessage;
    }

    return items.map(item => {
        return renderItem(item);
    });
};

export default List;
