import React, { useState, useEffect } from 'react';
import Item from './Item';


const Block = () => {
    const [active, setActive] = useState([]);
    const [a, setA] = useState([]);
    const [repetition, setRepetition] = useState(3);

    let array = [1, 2, 3, 4];


    const handleRandom = (repetition) => {
        let niz = [];
        for (let i = 1; i <= repetition; i++) {
            let number = Math.floor((Math.random() * 4) + 1);
            niz.push(number);
        }
        setRepetition(repetition + 1);
        setActive(niz);
    }


    // mozda nije potrebno
    const handleStartButton = (e) => {
        e.preventDefault()
        handleRandom(repetition);
    }


    const handleUserClick = (e, value) => {

        // console.log(b.every((val, index) => val === c[index]));
    }
    console.log(a);

    useEffect(() => {
        setActive([]);
    }, [repetition]);


    return (
        <>
            <div className='block'>
                {array.map((item, index) => <Item item={item} key={index} handleUserClick={handleUserClick} />)}
            </div>
            <button type='button' className='btn' onClick={(e) => handleStartButton(e)}>Start</button>
        </>
    )
}

export default Block;