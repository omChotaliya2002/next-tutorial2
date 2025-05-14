import React from 'react';
import Link from 'next/link';

const page = () => {


  return (


    <div className='flex flex-col items-center justify-center mt-[60px]'>
            <h1 className='text-2xl font-semibold underline underline-offset-4'> API Routes in Next.js </h1>

        <div className='mt-[60px]'>  

            <Link href={"/tutorial4/GET/employees"}>
                <button className="w-[180px] h-[40px] font-semibold text-lg text-black rounded-lg bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer delay-25 transition-all">
                        Employee List 🤵 </button>
            </Link>
        </div>

          <Link className='mt-[60px] text-xl hover:underline hover:underline-offset-4 hover:cursor-pointer' href={"/"}> &#x2616; Home </Link>

    </div>
  )
}

export default page;

// files used in this tutorial : 💥💥 

// => src/utils/db.tsx