import React, { useState } from "react";
import { Data } from "../data/data";
const Food = () => {
    const [food , setfood] = useState(Data)
    // filter bt type
    const Filtertype = (category) => {
        setfood(
            Data.filter((item)=> {
                return item.category === category
            })
        )
    }

    // filter By Price
    const filterprice = (price) => {
        setfood(
            Data.filter((item)=>{
                return item.price === price
            })
        )
    }


    return(
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-green-500 font-bold text-4xl text-center'><span className='text-green-500'>Damal</span> Hotel</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-green-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=>{
                            setfood(Data)
                        }}className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>All</button>
                        <button onClick={()=> Filtertype('burger')} className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>Cunto Wadani</button>
                        <button onClick={() => Filtertype('pizza')} className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>Beer</button>
                        <button onClick={() => Filtertype('salad')} className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>Kalaankal</button>
                        <button onClick={()=> Filtertype('chicken')} className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>Digaag</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-green-700'>Filter Price</p>
                    <div>
                        <button onClick={()=> filterprice('20$')} className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>Qiimaha U yar</button>
                        <button onClick={()=> filterprice('200$')}  className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>Qiimaha Ku xiga</button>
                        <button onClick={()=> filterprice('300$')}  className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>Qiimaha Ku sii xiga</button>
                        <button onClick={()=> filterprice('1000$')}  className='m-1 border-green-600 text-black-600 hover:bg-green-600 text-black'>Qiimaha u Badan</button>
                    </div>
                </div>
            </div>

            {/* Display Food */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {food.map((item , index)=>{
                return(
                    <div key={index} className='border shadow-l rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image}alt={item.name}
                        className='w-full h-[200px] object-cover rounded-t-lg'/>
                        <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p className='bg-green-500 text-white p-1 rounded-full'>{item.price}</p>
                        </div>
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default Food