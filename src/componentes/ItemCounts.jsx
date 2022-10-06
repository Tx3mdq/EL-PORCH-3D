import '../App.css'
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa'


export const ItemCounts = ({ count, add, substract, price }) => {

    return (
        <div>
            <div className="count">
                <button className="button" onClick={() => substract(count)}><FaChevronLeft color="white" /> </button>
                <span className="quantity">{count}</span>
                <button className="button" onClick={() => add(count)}><FaChevronRight color="white" /> </button>
            </div>
                <h5 className='totalDetail'>Total: ${count * price} </h5>
        </div>
    )
}
export default ItemCounts