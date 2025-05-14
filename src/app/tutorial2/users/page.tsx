
import React from 'react';
import uData from '../../../../services/getUsers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type User = {

  id : number;
  firstname : string;
}

export default async function Page(){

  // redirect("/about");        // to redirect user to /about

  const userList = uData();
  const users : User[] = await userList;

  // console.log(Array.isArray(users));
  // console.log(users);


  return (
<>

    <div className='flex flex-col items-center justify-center mt-[20px] mb-[100px]'>

      <div className='ml-[-1100px]' style={{border:"0px solid white"}}>
         <Link className='mt-[20px] mb-[20px]  text-xl hover:underline hover:underline-offset-4 hover:cursor-pointer' href={"/"}> &#x2616; Home </Link>
      </div>

        <h1 className='text-2xl font-semibold mb-[20px] underline underline-offset-[5px]'> Static Site Generation (SSG) </h1>

        <h1 className='text-2xl font-semibold mb-[20px] underline underline-offset-[5px]'> Users List </h1>

        {
            users.map((user : any)=> (

                <Link key={user.id} className='hover:underline hover:underline-offset-4 text-lg my-1' href={`/tutorial2/users/${user.id}`}> {user.firstName}  </Link>
            ))

        }

    </div>
  </>
  )
}