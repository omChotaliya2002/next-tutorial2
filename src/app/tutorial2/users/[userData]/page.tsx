    import uData from "../../../../../services/getUsers";

 type User = {

  id : number;
  firstName : string;
  lastName : string;
  age : number;
  gender : string;
  email : string;
  phone : string;
  birthDate : string;

  address : {
    city : string;
    state : string;
    country : string;
  }
}


export interface PageProps {
  params: {
    userData: string; // ✅ plain string, not Promise
  };
  searchParams?: Record<string, string | string[] | undefined>;
}




 export default async function Page({params} : PageProps){
 
   const users : User[] = await uData(); 
   const userId = parseInt(params.userData);     // converting the userData from the URL (which is a string) into a number.    

   const user = users.find((u) => u.id === userId);    // filtering the user list to find the user whose ID matches the one in the URL.

//    console.log("current user is : ", users);

    if(!user) {
        return(
            <div className="flex items-center justify-center mt-[50px]">  
                User not found
            </div>
        );
    }


   return(

    <>
        <div key={user.id} className="flex flex-col items-center justify-center mt-[50px]">

            <h1 className="text-2xl font-semibold underline underline-offset-[5px] mb-[40px]"> Detailes of : {user.firstName} </h1>
        
        <table className="border-collapse" style={{border:"1px solid white"}}> 

            <tbody>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center"> <p className="text-lg"> <strong> FirstName </strong> </p> </td> 
                <td className="w-[300px]"> <p className="text-lg ml-[10px]"> {user.firstName} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> LastName </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.lastName} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> Age </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.age} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> Gender </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.gender} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> Email </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.email} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> Phone </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.phone} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> BirthDate </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.birthDate} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> City </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.address.city} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> State </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.address.state} </p> </td>
            </tr>

            <tr className="border border-white">   
                <td className="border border-white w-[130px] h-[35px] text-center">  <p className="text-lg"> <strong> Country </strong> </p> </td> 
                <td className="w-[300px]">  <p className="text-lg ml-[10px]"> {user.address.country} </p> </td>
            </tr>



            </tbody>
        </table>
        </div>

    </>

   )
 }

 //This function is used in Next.js App Router to pre-render static pages for 
 // all possible user IDs at build time. : 📌📌

 export async function generateStaticParams() {

    try{

        const users:User[] = await uData();

        return users.map((user)=> ({
            userData :  user.id.toString(),
        }));

    }
    catch(error){
        console.error("Error in generateStaticParams", error);
        return[];
    }

        
 }