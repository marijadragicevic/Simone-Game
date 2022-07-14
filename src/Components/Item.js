import React from 'react';

const Item = ({ item, handleUserClick }) => {

    return (<div className={`block__item${item}`} onClick={(e, item) => handleUserClick()}></div>);
}

export default Item;