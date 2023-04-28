import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch , AiFillTag} from 'react-icons/ai'
import {BsFillCartFill , BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends , FaWallet} from 'react-icons/fa'
import {MdFavorite , MdHelp} from 'react-icons/md'
const Navbar = () => {
    const [nav , setnav ]= useState(false)
    const [Active , setActive] = useState("delivery")
    return (
        <div className= ' max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* left side */}
            <div className='flex items-center'>
            <div onClick={() => {
                setnav(!nav)
            }} className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
               <span className='text-green-600'>Dahabshiil</span>  <span className='font-bold'>Companies</span>
                </h1>
            <div className='hidden lg:flex items-center
             bg-gray-200 rounded-full p-1 text-[40px]'>
                <p onClick={()=> {
                    setActive("delivery")
                }} className={`${Active === "delivery" ? "bg-green-600" : " "} text-white rounded-full p-2 cursor-pointer`}>Delivery</p>
                <p onClick={()=>{
                    setActive("pickup")
                }} className={`${Active === "pickup" ? "bg-green-600" : " "}  text-white rounded-full p-2 cursor-pointer`}>PickUP</p>
            </div>
            </div>
            
            {/* Search input */}
            <div  className=" bg-gray-200 rounded-full flex items-center
            px-2 w-[200px]  sm:w-[400px]  lg:w-[500px]">
              <AiOutlineSearch size={20}/>
              <input className="bg-transparent 
              p-2 w-full" type="text" placeholder="soogali"/>
              </div>

            {/* Card Button */}
            <button className='bg-green-600 text-white 
            hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-2'/>Cart
            </button>

            {/* Mobile Menu */}
            
            {nav ? <div className='bg-black/80 fixed w-full 
            h-screen z-10 top-0 left-0'></div> : "" }

            {/* Side drow Menu */} 
            <div className={nav ? 'fixed top-0 left-0 w-[150px] h-screen bg-white z-10 duration-300':
        'fixed top-0 left-[-100%] w-[150px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose 
                onClick={()=>{
                    setnav(!nav)
                }}
                size={20} className="absolute right-4 top-4 cursor-pointer"/>
                <h2 className="text-2xl p-4">
             Best <span className=" font-bold">Eats </span> </h2>
             <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'><TbTruckDelivery 
                    size={25} className='mr-4'/>Orders</li>
                    <li className='text-xl py-4 flex'><MdFavorite
                    size={25} className='mr-4'/>Favorites</li>
                    <li className='text-xl py-4 flex'><FaWallet
                    size={25} className='mr-4'/>Wallet</li>
                    <li className='text-xl py-4 flex'><MdHelp
                    size={25} className='mr-4'/>Help</li>
                   <li className='text-xl py-4 flex'><AiFillTag
                    size={25} className='mr-0' flex/>Promotion</li> 
                    <li className='text-xl py-4 flex'><BsFillSaveFill
                    size={25} className='mr-0'/>BestOrders</li>
                    <li className='text-xl py-4 flex'>< FaUserFriends
                    size={25} className='mr-4'/>Others</li>
                </ul>
             </nav>
             </div>
        </div>
    )
}

export default Navbar