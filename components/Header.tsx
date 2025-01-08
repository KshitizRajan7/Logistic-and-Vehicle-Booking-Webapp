'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import tlogo from "@/public/llogo.png"
import { supabase } from '@/lib/supabase/department';
import { useRouter } from 'next/navigation';

const itemsList = [
  "All",
  "Fresh",
  "Sell",
  "Gift Cards",
  "Buy Again",
  "Browsing History",
  "Health, Household & Personal Care"
];


const Header = () => {
  const[user,setUser] = useState<any>(null);
  const router = useRouter();
  useEffect(()=>{
    const getUserData = async()=>{
      const{data:{user}} = await supabase.auth.getUser();
      setUser(user);
    } 
    getUserData();
  },[])
  console.log(user);
  return (
    <>
    <div className="bg-[#ff6600] text-white py-5 justify-center flex border">
        <div className="flex items-center justify-between w-[80%]">
          <div className="w-[30%] ">
          <Image src={tlogo} alt="clogo" width={40} height={40}></Image>
          </div>
          {/* <div className=" flex  items-center w-[60%]">
            <input className="w-full p-2 rounded-l-md text-black text-center outline-none" type="text" placeholder="Search Product" />
            <div className="bg-[#F6BE32] p-2 text-black rounded-r-md cursor-pointer">
            <CiSearch size={"24px"}/>
            </div> */}
          {/* </div> */}
          <div className="flex items-center justify-around w-[50%]">
            <div className="cursor-pointer">
              <ul className='flex gap-5'>
                <li>Company</li>
                <li>Service</li>
                <li>Technology</li>
                <li>Career</li>
                <li>Contact Us</li>
              </ul>
          </div>
          {/* <div className="cursor-pointer">
            <p className="text-xs">Returns</p>
            <h1 className="font-medium text-sm">& Orders</h1>
            </div>
            <div className="cursor-pointer">
            <p className="relative top-3 left-3">0</p>
            <div className="flex">
            <div>
            <CiShoppingCart size={"30px"}/>
            </div>
            <h1 className="mt-2">cart</h1>
            </div>
            </div> */}
        </div>
    </div>
            <div className='flex items-center gap-2'>
              <h1>Hello {`${user ? user.identities[0].identity_data.full_name : 'guest'}`}</h1>
              {user ?
                <p onClick={async()=>{
                  const {error} = await supabase.auth.signOut();
                  router.push('./signin') ;
                }}className='cursor-pointer hover:underline text-sm'>Sign Out</p>
                :
                <p onClick={()=>{
                  router.push('./signin');
                }}className='cursor-pointer hover:underline text-sm'>Sign In</p>
                }
                </div>
            </div>
    </>
  )
}

export default Header
