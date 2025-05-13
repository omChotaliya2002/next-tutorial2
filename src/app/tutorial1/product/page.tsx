import React from 'react';
import User from '@/components/user';
import Link from 'next/link';

const page = () => {


  return (


    <div className='flex flex-col items-center justify-center mt-[40px]'>
        <h1 className='font-bold underline underline-offset-4 text-3xl'> Export Static HTML page with build </h1>
            <h1 className='text-3xl font-semibold mt-[80px] mb-[10px]'> Product List </h1>
            <h1> <User/> </h1>

            <Link className='mt-[20px] text-xl hover:underline hover:underline-offset-4 hover:cursor-pointer' href={"/tutorial1/seller"}>&#x20B9; Go to Seller page </Link>
            <Link className='mt-[20px] text-xl hover:underline hover:underline-offset-4 hover:cursor-pointer' href={"/"}> &#x2616; Home </Link>
    </div>
  )
}

export default page;


// file used in this tutorial : 💥💥

// components/user.tsx