import { useState, useEffect } from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Cards = () => {
  const [freeBook, setFreeBook] = useState([]);

  useEffect(() => {
    const bookslist = list.filter((item) => item.category === "free");
    setFreeBook(bookslist);
    console.log(bookslist); // Logs the filtered list, not the updated state
  }, []); // Dependency array should include `list` to re-run effect if `list` changes

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 1,
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
      <div className="slider-container mt-4 p-8">
        <Slider {...settings} >
          {freeBook &&
            freeBook.length > 0 &&
            freeBook.map((book) => (
              <div
                key={book.id}
                className="card max-w-96 hover:scale-105 duration-150 bg-base-50  shadow-xl border border-slate-50 h-[550px]"
              >
                <figure className="w-full">
                  <img src={book.image} alt="book" className="w-full"/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {book.name}!
                    <div className="badge badge-secondary">{book.category}</div>
                  </h2>
                  <p>{book.title}</p>
                  <div className="card-actions justify-between">
                    <div className="badge badge-outline">
                      &#8377;{book.price}
                    </div>
                    <div className="badge badge-outline cursor-pointer">
                      Buy now
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default Cards;
