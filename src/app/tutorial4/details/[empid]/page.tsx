import { user } from "@/utils/db";
import Image from "next/image";
import Link from "next/link";

export default function Page ({params} : {params : {empid : string}}) {

        const data = user.users;

        console.log("the id is " , params.empid);

        const userData = data.filter((item) => item.id == params.empid);

        
        return (

    <>

            <div className="flex flex-col items-center justify-center mt-[70px] mb-[100px]">

                <h1 className="text-2xl font-semibold mb-[40px]"> Details of id : <strong> {params.empid} </strong>  </h1> 


            {
                userData.length > 0 ? (

                    userData.map((item)=> {

                        return(
                            <div key={item.id} className="mt-[20px] space-y-2 flex flex-col items-center justify-center">
                                
                                <Image className="mb-[20px] rounded-xl hover:rounded-4xl transition-all delay-100" alt="user" src={item.image} height={120} width={120}/>

                              <table className="border-collapse"> 
                                <tbody>

                                    <tr className="border border-white">
                                        <td className="w-[140px] px-[10px] border border-white"> <strong className="text-lg"> Id </strong> </td>
                                        <td className="text-center w-[200px]"> <h1 className="text-lg">  {item.id} </h1> </td>
                                    </tr> 

                                    <tr className="border border-white">
                                        <td className="w-[140px] px-[10px] border border-white"> <strong className="text-lg"> Name </strong> </td>
                                        <td className="text-center w-[200px]"> <h1 className="text-lg">  {item.name} </h1> </td>
                                    </tr>

                                    <tr className="border border-white">
                                        <td className="w-[140px] px-[10px] border border-white"> <strong className="text-lg"> Designation </strong> </td>
                                        <td className="text-center w-[200px]"> <h1 className="text-lg">  {item.designation} </h1> </td>
                                    </tr>

                                    <tr className="border border-white">
                                        <td className="w-[140px] px-[10px] border border-white"> <strong className="text-lg"> Email </strong> </td>
                                        <td className="text-center w-[200px]"> <h1 className="text-lg">  {item.email} </h1> </td>
                                    </tr>

                                </tbody>
                              </table>

                            </div>
                        )
                    })

                ) : (
                    
                    <p className="text-red-500 text-xl font-mono"> <strong> User not found.. </strong> </p>
                    
                )

            }

                <div className="mt-[50px] hover:scale-105 hover:underline hover:underline-offset-[5px]">
                    <Link className="font-semibold text-lg" href={"/tutorial4/employees"}>
                             &#x21d0; Back to Employee List
                        </Link>
                </div>

         </div>
        

         
    </>
        )

}