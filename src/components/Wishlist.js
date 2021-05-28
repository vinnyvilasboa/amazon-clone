import React, { useState, useEffect } from 'react'


/*
when im thinkig about a component
1. is this component going to have its own state? yes -> useState
2. my component may or may not have props but i want to 
*/
const Wishlist = props => {
    const [list, setList] = useState([]);

    const addItems = () => {
    setList(props.list);
    }

    let itemList = list.map((item, idx)=> {
        return <li key={idx}>{item}</li>
    })
    return (
        <div>
        <h1>WISHLIST</h1>
        <button onClick={addItems}>Add Items</button>
        <ul>
            {itemList}
        </ul>

        </div>
    )
}


export default Wishlist