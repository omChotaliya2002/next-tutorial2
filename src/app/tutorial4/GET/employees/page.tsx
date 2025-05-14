import { user } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";



export default async function Page() {

    const data = user.users;
    // console.log("params are", params);
    // console.log(data);

    return(

        <>

        <div className="flex items-center justify-center mt-[50px]">
            <h1 className="text-2xl font-semibold underline underline-offset-[5px]"> List of Employees </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-[60px] space-x-16" style={{border:"0px solid white"}}>
            {
                data.map((item : any) => {
                    
                    return (

                     <Link key={item.id} href={`details/${item.id}`}>
                        <div key={item.id} className="card w-[180px] h-[200px] space-y-2 flex flex-col items-center justify-center ring-[0.5px] ring-white
                            hover:scale-110 hover:cursor-pointer hover:border-[1.5px] rounded-lg hover:border-white transition-all delay-[50]">

                            <div className="mt-[10px]">
                                 <Image alt="user" src={item.image} height={50} width={50}/>
                            </div>

                                <h1 className="font-semibold"> Id : {item.id} </h1>
                                <h1> {item.name} </h1>
                                <h1> {item.designation} </h1>
                                <h1 className="mb-[10px]"> {item.email} </h1>
                               
                        </div>
                    </Link>

                    )

                })
            }
            
        </div>

            <div className="flex items-center justify-center mt-[50px]">
                <Link href={"/tutorial4"}>
                    <button className="w-[150px] h-[40px] font-semibold text-lg text-black rounded-lg bg-white hover:bg-black hover:text-white hover:ring-2 hover:ring-white active:bg-slate-600 hover:cursor-pointer delay-25 transition-all">
                         &#x21d0; Back  </button>
                </Link>
            </div>
        </>

    )

}