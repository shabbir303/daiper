"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const ProductImages = () => {
    const [index, setIndex] = useState(0);
    const imges=[
        {
            id:"1",
            url:"/blueDi.jpeg"
        },
        {
            id:"2",
            url:"/lightDi.jpeg"
        },
        {
            id:"3",
            url:"/redDi.jpeg"
        },
        {
            id:"4",
            url:"/yellowDi.jpeg"
        }
    ]
    return (
        <div>
            <div className='h-[500px] relative'>
                <Image
                  src={imges[index].url}
                  alt="blueDi"
                  fill
                  sizes='50vw'
                  className='object-cover rounded-xl'
                />
                </div>
                <div className='flex justify-between gap-8'>
                   {imges.map((img,i)=>{
                     return <div 
                     className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
                     key={img.id}
                     onClick={()=>setIndex(i)}

                     >
                     <Image
                       src={img.url}
                       alt='buledi'
                       fill
                       sizes='30vw'
                       className='object-cover rounded-xl'
                     />
                 </div>
                   })}
                </div>
            
        </div>
    );
};

export default ProductImages;