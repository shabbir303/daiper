import React from 'react';
import OrderBtn from './OrderBtn';

const Que = () => {
    return (
        <div className='mt-[80px] md:w-[1200px] mx-auto'>
            <h1 className='text-center text-[40px] font-bold bg-[#B52555]  text-white rounded-xl'>কেন কিনবেন এই ডায়াপারগুলো।</h1>
            <ul className='text-center mx-auto text-[25px] font-semibold mt-[20px]'>
                <li className='flex text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/> গরমে ব্যবহার উপযোগী কাপড় দিয়ে তৈরী।</li>
                <li className='flex text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/> সম্পূর্ণ ওয়াটার প্রুফ হওয়ায় পানি লিক করবে না।</li>
                <li className='flex text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/>অন্যান্য ডায়াপারের মত বারবার কেনার ঝামেলা নাই।</li>
                <li className='flex text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/>একই ডায়াপার বারবার ব্যবহার করা যায় বিধায় খরচ সাশ্রয় করে</li>
                <li className='flex text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/>ক্যামিকেল মুক্ত আর কাপড়ের তৈরী হওয়ায় বাচ্চার ত্বকের ক্ষতি করে না।</li>
            </ul>
               <OrderBtn/>
        </div>
    );
};

export default Que;