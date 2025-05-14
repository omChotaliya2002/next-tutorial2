// "use client";

import Link from "next/link";

export default function Home() {

  return (

    <>

        <div className="flex items-center justify-center mt-[100px] text-2xl">

              <div>

          <div className="t1 mt-[30px]"> 
              <Link href={"/tutorial1/product"}>
                  <button className="w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer delay-25 transition-all"> 
                      Tutorial-1 </button>
              </Link>
          </div>

          <div className="t1 mt-[30px]"> 
              <Link href={"/tutorial2/users"}>
                  <button className="w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer delay-25 transition-all">
                       Tutorial-2 </button>
              </Link>
          </div>

          <div className="t1 mt-[30px]"> 
              <Link href={"/tutorial3"}>
                  <button className="w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer delay-25 transition-all">
                       Tutorial-3 </button>
              </Link>
          </div>

          <div className="t1 mt-[30px]"> 
              <Link href={"/tutorial4"}>
                  <button className="w-[100px] h-[40px] font-semibold text-lg text-black rounded-md bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer delay-25 transition-all">
                       Tutorial-4 </button>
              </Link>
          </div>

              </div>

        </div>

    </>
    
  );
}
