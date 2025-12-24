import React,{useState,useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

import Cards from "./Cards";
const Freebook = () => {
  const [book,setBook] = React.useState([]);
      useEffect(()=>{
          const getBook = async()=>{
              try{
                  const response = await axios.get("http://localhost:4001/book");
                  setBook(response.data.filter((data) => data.category === "Free"));
              }
              catch(err){
                  console.log("Error fetching books:", err);
              }
          }
          getBook(); 
      },[])
 
  console.log(book.data)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-6 px-4">
        <div> 
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ea
            quibusdam, ratione quasi illo eos assumenda inventore temporibus
            alias aut voluptatibus eius voluptas consequuntur molestiae ad?
          </p>
        </div>
      
      <div>
        <Slider {...settings}>
          {book.map((item)=>{
            return <Cards item={item} key={item.id}/>;
          })}
        </Slider>
      </div>
      </div>
    </>
  );
};

export default Freebook;
