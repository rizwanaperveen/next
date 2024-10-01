import React from 'react';
import Image from 'next/image'

export default function IdCard() {
    return (
        <div className='flex flex-colbg-white min-h-screen p-4 m-4'>
            <div className='flex-grow flex items-center justify-center p-6'>
                <div className='bg-slate-200 p-12 rounded-lg shadow-lg max-w-4xl w-full flex item-center justify-center border-4 border-sky-300'>

              {/*background image*/} 
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='relative w-full h-full max-w-[400px] max-h-[300px]'>
                    <Image 
                    src="/images/governor.PNG"
                    alt="governor" width={400}
                    height={300}
                    objectFit="cover"
                    className="opacity-30"/>
              </div>
              </div>
            {/* left side*/}
            <div className='w-2/3 pr-4 pt-16 relative z-10'>
            <p className='mb-2'>
                <span className='text-sky-500'>
                    {" "}
                    <strong> Name </strong>
                    </span>
                    <span className='text-black'> <strong>Rizwana Perveen</strong></span>
                    </p></div>











                </div>
            </div>
        </div>
    );
}