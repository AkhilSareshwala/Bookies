import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import Slider from 'react-slick'
const Freebook = () => {
    const filtr = list.filter((book)=>book.category==='Free')
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
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
  return (
    <>
        <div className='  max-w-screen-2xl container md:mt-[90px] mx-auto md:px-20 px-4' >
            <div className='space-y-5'>
                <h1 className='text-xl font-bold'>Free Books</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem labore facilis modi a, sint architecto beatae ut aspernatur officia magnam, repellendus dolorum quam at praesentium quisquam perferendis ratione illo. Animi.</p>
            </div>
            <div className="slider">
            <Slider {...settings} >
                {filtr.map((book)=>{
                    return(
                        <Cards title={book.title} category={book.category} description={book.description} price={book.price} img={book.image}/>
                    )
                })}
            </Slider>
            </div>
        </div>
    </>
  )
}

export default Freebook
