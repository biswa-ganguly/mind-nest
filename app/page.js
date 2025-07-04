"use client"
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";


export default function Home() {

  const {user}= useUser();
  const createUser = useMutation(api.user.createUser)

  useEffect(()=>{
    user && CheckUser()
  },[user])

  const CheckUser= async ()=>{
    const result = await createUser({
      userEmail:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      imageUrl:user?.imageUrl
    })

    console.log(result)
  }


  return (
    <div>
      hellow
      loreo
    </div>
  );
}
