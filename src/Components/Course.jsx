import React from 'react'
import list2 from '../../public/list2.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
const Course = () => {
    
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
            <h1 className=' pt-[100px] md:text-4xl text-2xl justify-center text-center dark:bg-black'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
            <p className='mt-5 text-xl text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at odio, perferendis, magni illum dolorem nesciunt voluptatibus ea dolor excepturi blanditiis similique in esse? Voluptatum autem explicabo ex officiis dolore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis quae corrupti vitae. Harum tempore earum qui numquam quasi, corporis recusandae voluptatibus dicta nemo assumenda officiis natus sunt distinctio nostrum?</p>
            <Link to='/'>
            <button className=' md:ml-[620px] ml-[150px] mt-3 py-2 px-5 rounded-md text-white bg-pink-500 hover:bg-pink-700 '>Back</button>
            </Link>
            <div className='grid md:grid-cols-3 md:mt-[60px] gap-4 grid-cols-1 md:gap-[70px] '   >
                {list2.map((book)=>{
                    return(
                        
                            <div className=''>
                              <Cards  title={book.title} price={book.price} description={book.description} category={book.category} img={book.image}></Cards>
                            </div>
                        
                    )
                })}
                
            </div>
            
        </div>

      
    </>
  )
}

export default Course
