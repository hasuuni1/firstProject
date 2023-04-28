import React from "react";

const Headline = () => {
    return (
        <div className='max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'> Ku Soo Dhawoow</p>
                    <p className='px-2'><span className=''>Dahabshiil</span> Bank</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>IsDiiwanGeli</button>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://yt3.ggpht.com/a/AATXAJyOkjoNJtDO8LpZXTraKBS9Kd-VbyQ60tRVkA=s900-c-k-c0xffffffff-no-rj-mo" alt="/"/>
            </div>
                       {/* Card */}
                       <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Geeye</p>
                    <p className='px-2'>Taxi</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Dalbo</button>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://th.bing.com/th/id/OIP.pNqD_j5n2BwzILXSz_D_lQHaEK?pid=ImgDet&rs=1" alt="/"/>
            </div>
                       {/* Card */}
                       <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Somtel</p>
                    <p className='px-2'>Hargeisa</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>IsDiiwanGeli</button>
                </div>
                <img 
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src="https://th.bing.com/th/id/OIP.Oe08kD02aZ7so7H9pYKtVwHaEf?pid=ImgDet&rs=1" alt="/"/>
            </div>
        </div>
    )
}

export default Headline