import React from 'react'

const Transaction = () => {
  return (
    <li className={`transaction ${type}`}>
            <p>dfdfdf</p>
            <div className="right">
                <p>৳ 455</p>
                <button className="link">
                    <img alt="Edit" className="icon" />
                </button>
                <button className="link" >
                    <img alt="Delete" className="icon"  />
                </button>
            </div>
        </li>
  )
}

export default Transaction