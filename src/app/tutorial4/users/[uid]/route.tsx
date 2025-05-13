import { NextResponse } from "next/server";
import {user} from "../../../../utils/db";

export function GET(req : Request, content : any ) {

    const data = user;
    console.log("the params are : ", data, content.params.uid);

    const userData = user.filter((item)=> item.id == content.params.uid);  //filters the data whose id match with actual id👍

    if(userData.length > 0){
        
        return NextResponse.json({result : userData, success : true}, {status : 200});

    }
    else{
        return NextResponse.json({result : "no data found", success : false}, {status : 404});
    }

}