import { NextResponse } from "next/server";
import {user} from "../../../utils/db";

export function GET() {
  
      const data = user;
      return NextResponse.json(data, {status : 200});

}












// { 
//       firstname: "omi",
//       lastname : "chotaliya",
//       gender : "male",
//       designation: "developer",
//         basic: {
//             dob: "30-08-2002", 
//             hobby: "Writing poetry" },
//         address : {
//             city : "Bhavnagar", 
//             state : "Gujarat" , 
//             country : "India",
//             zip : "364001"
//         },
//         contact : {
//             email : "omchotaliya123@gmail.com",
//             phone : "9483983232",
//         }
//     },