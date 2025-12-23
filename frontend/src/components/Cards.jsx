import React from "react";
import list from '../../public/list.json'
function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-white text-black border border-gray-500 dark:bg-slate-800 dark:text-white dark:border-white-800  w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline px-2 py-1 rounded-lg bg-white text-black hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
