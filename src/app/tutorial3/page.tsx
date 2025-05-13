import { API_BASE_URL } from '@/config/constant';
import React from 'react';
import Link from 'next/link';

const page = () => {

    // console.log(process.env.SERVER_PASSWORD);    // to check the node environment (dev or production) 📌



   

  return (
<>
        

    <div className='flex flex-col items-center justify-center text-2xl font-semibold mt-[30px]'>
            <h1 className='underline underline-offset-[5px] mb-[30px]'> Environment variables in next.js </h1>     

        {
            process.env.NODE_ENV == "development" ? 
            <h1 className='mt-[30px] mb-[20px] font-mono'> You are in <strong> {process.env.NODE_ENV} </strong>  mode </h1>  :
            <h1 className='mt-[30px]'> You are in <strong> {process.env.NODE_ENV} </strong>  mode </h1>
        }

        <h1 className='mt-[30px] text-xl'> Server password : {process.env.SERVER_PASSWORD} </h1>
        <h1 className='mt-[10px] text-xl'> Database password : {process.env.DB_PASSWORD} </h1>
        <h1 className='mt-[10px] text-xl'> Custom mode : {process.env.CUSTOM_MODE} </h1>

        <h1 className='mt-[20px] text-xl'> Api base url : {API_BASE_URL} </h1>

        <Link className='mt-[20px] text-xl hover:underline hover:underline-offset-4 hover:cursor-pointer' href={"/"}> &#x2616; Home </Link>



    </div>


</>
  )
}

export default page;


// file used in this tutorial : 💥💥  

// src/config/constant.tsx
  