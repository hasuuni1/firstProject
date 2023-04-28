import React from "react";

const Hero = () => {
    return(
        <div className='max-w-[1640px] mx-auto p-4'>
           <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Dahabshiil <span className='text-green-600'>Bank</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-green-600'>Hargeisa</span> Somaliland</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://th.bing.com/th/id/OIP.qAt3f8nLb1SBtEQfIZ5gCAHaFP?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="/"/>
            </div> 
        </div>
    )
}

export default Hero