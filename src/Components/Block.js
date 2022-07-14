import React, { useState } from 'react';
import Item from './Item';


const Block = () => {
    const [active, setActive] = useState("");
    const [repetition, setRepetition] = useState(3);
    const [b, setb] = useState([]);

    let array = [1, 2, 3, 4];
    let c = [];


    const handleRandom = (repetition) => {
        let niz = [];
        for (let i = 1; i <= repetition; i++) {
            let number = Math.floor((Math.random() * 4) + 1);
            niz.push(number);
        }
        setRepetition(repetition + 1);
        setActive(niz);
        setb(niz)
    }


    // mozda nije potrebno
    const handleStartButton = (e) => {
        e.preventDefault()
        setActive("")
        handleRandom(repetition);
    }


    const handleUserClick = (value) => {
        c.push(value);
        console.log(c);

        if (c.length === active.length) {
            active.every((val, index) => val === c[index]) ? alert("Congratulations!")
                : alert("You have lost!");

        }
    }
    console.log(active);

    return (
        <>
            <div className='block'>
                {array.map((item, index) => <Item item={item} key={index} handleUserClick={handleUserClick} b={b} />)}
            </div>
            <button type='button' className='btn' onClick={(e) => handleStartButton(e)}>Start</button>
        </>
    )
}

export default Block;