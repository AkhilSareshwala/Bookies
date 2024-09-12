import React from 'react'

const Cards = (props) => {
  return (
    <>
        <div className="card bg-base-100 w-96 shadow-2xl hover:scale-105 duration-300    ">
            <figure>
                <img
                src={props.img}
                alt="Shoes" />
            </figure>
            <div className="card-body z-0 dark:bg-gray-800  ">
                <h2 className="card-title">
                {props.title}
                <div className="badge badge-secondary px-2 py-3 bg-pink-500 text-white">{props.category}</div>
                </h2>
                <p>{props.description}</p>
                <div className="card-actions justify-between flex">
                <div className="badge badge-outline mt-2">Rs.{props.price}</div>
                <div className="badge badge-outline cursor-pointer px-2 py-4 hover:bg-pink-500 hover:text-white">Buy now</div>
                </div>
            </div>
            </div>
    </>
  )
}

export default Cards
