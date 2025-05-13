import React from 'react';
import Link from 'next/link';

const page = () => {


  return (


    <div className='flex flex-col items-center justify-center mt-[100px]'>
            <h1 className='text-3xl font-semibold'> Seller List </h1>

        
            <Link className='flex flex-row mt-[50px] text-xl hover:cursor-pointer hover:underline hover:underline-offset-[5px]' href={"/tutorial1/product"}> 
                <h1 className='text-xl'> &#x2684; Go to Product page </h1>   
            </Link>
    </div>
  )
}

export default page;