"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const OrderBtn = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/order');
    };
    return (
        <div>
              
              <a href="#order-section">
              <button 
              
              className='flex items-center justify-center mx-auto gap-5 bg-[#F97114] px-[15px] py-[10px] rounded-xl mt-[20px]'>
                <img src="/order.svg" alt="" className='w-[40px]' />
                <h1 className='text-[30px] font-semibold text-white'>অর্ডার করুন</h1>
            </button>
              </a>
              
        </div>
    );
};

export default OrderBtn;