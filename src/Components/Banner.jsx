import React from 'react'
import pic from '../../public/Banner.png'
const Banner = () => {
  return (
    <>
        <div className='  max-w-screen-2xl container  md:flex-row flex-col mx-auto md:px-20 px-4 flex'>
            <div className='md:w-1/2 w-screen  md:mt-[150px] space-y-10 pt-18 md:order-1 order-2'>
                <div className='md:text-5xl text-3xl'>
                    <h1>Hello, welcomes here to learn something <span className='text-pink-400'>new everyday!!</span></h1>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit expedita consectetur illum iusto, nulla alias asperiores. Sequi facilis laudantium id reiciendis autem debitis esse accusantium beatae totam animi. Quam, nulla.</p>
                <div>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                 </label>
                 <button className='btn hover:bg-pink-700 bg-pink-500 text-white mt-10'>Secondary</button>
                </div>
            </div>
            <div className='md:w-1/2 w-full md:order-2 order-1 md:pt-28 mt-[80px] md:mt-[40px] md:pl-[120px]'>
                <img src={pic} alt="" className='w-92 h-92 text-center'/>
            </div>
        </div>
    </>
  )
}

export default Banner
