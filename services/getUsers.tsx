import { cache } from "react";

export default async function uData() {
    
    const result = await fetch("https://dummyjson.com/users");
    const res = await result.json();
    return res.users;           // make sure this function retrurns an array..👍👍
}