import React from 'react'
import list2 from '../../public/list2.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
const Course = () => {
    
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
            <h1 className=' pt-[100px] md:text-4xl text-2xl justify-center text-center dark:bg-black'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
            <p className='mt-5 text-xl text-justify'>Welcome to our learning platform, where passion meets knowledge! We are committed to offering you a diverse range of courses designed to inspire, educate, and empower. Whether you're a beginner looking to learn a new skill or an experienced professional seeking advanced expertise, we've got something for everyone. Our carefully curated content ensures that you are always on the path to success.
            At our core, we believe that education is the key to unlocking endless possibilities. We pride ourselves on creating an inclusive community where learning is accessible, enjoyable, and rewarding. Join us on this journey and discover the power of knowledge tailored to your unique needs.</p>
            <Link to='/Bookies'>
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
