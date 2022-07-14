import React, { useState, useEffect } from 'react';

const Item = ({ item, handleUserClick, b }) => {
    const [toggle, setToggle] = useState(false);

    console.log(toggle);
    const handleMatch = () => {
        b.length !== 0 ? b.map(el => {
            if (el === item) {
                setToggle(true)
            }
        }) : setToggle(false);
    }

    useEffect(() => {
        handleMatch();
    }, []);

    return (<div className={toggle === true ? `active` : `block__item${item}`} onClick={() => handleUserClick(item)} ></div>);
}

export default Item;