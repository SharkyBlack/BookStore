import React from "react";
import Cards from "./Cards";
import list from '../../public/list.json'
import { Link } from "react-router-dom";
function Course(){

    return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl">We're Delighted to have you <span className="text-pink-500">here</span></h1>

            <p className="mt-12 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, ut. Reiciendis dolores voluptate saepe nostrum ipsa tenetur mollitia nesciunt maxime! Nihil reprehenderit velit doloremque odit iure tenetur repellat suscipit excepturi hic voluptas sed fugit ipsum expedita et aliquid, saepe magni beatae voluptatibus? Voluptas, ratione. Voluptatibus modi in iure veritatis dolorum.</p>

            <Link to="/">
            <button className=" bg-pink-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-pink-700 duration-300">Back</button>
            </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                list.map((item)=>{
                   return <Cards key={item.id} item={item}/>
                })
            }
        </div>
    </div>
    </>
    )
}
export default Course;
