import React from 'react';

const Common = () => {
    const que = [
        {
        img:"/d3.png",
        title:"কতবার ওয়াশ করা যাবে?",
        des:"যতবার ইচ্ছা ওয়াশ করা যাবে।একটা কাথাঁ যেমন বার বার ওয়াশ করা যায়, ঠিক ওয়াশেবল ডায়পার ও বারবার ওয়াশ করা যায়।",
    },
        {
        img:"/d3.png",
        title:"কি কাপড় দিয়ে তৈরি?",
        des:"মাইক্রো ম্যাশ দিয়ে তৈরী প্যাড দ্রুত শোষণ করে ফেলে আর ব্রিদেবল ফেব্রিক্স বাবুকে দেয় আরামদায়ক অনুভূতি। নন-স্টিকি কাপড়ের ব্যবহারের কারণে ধুয়ে ফেলা যায় খুব দ্রুত।",
    },
        {
        img:"/d3.png",
        title:"কত ঘন্টা পড়ানো যাবে?",
        des:"একেক বেবির হিসু করার পরিমাণ একেক রকম, তাই কতক্ষণ পরিয়ে রাখা যাবে সে সম্পর্কে সঠিক ভাবে বলাটা কঠিন।তবে ৪-৫ ঘন্টা পরিয়ে রাখতে পারবেন।",
    },
]
    return (
        <div className='md:w-[1200px] mx-auto my-[100px]'>
             <h1 className='text-center text-[30px] font-bold bg-[#B52555]  mt-[50px] text-white rounded-xl'>কিছু কমন প্রশ্নের উত্তর</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[10px] mt-[20px]'>
                {que.map((que,index)=>{
                    return <div key={index} className='p-4 border-2 border-[#B52555] rounded-xl'>
                        <img src={que.img} alt={que.title} className='w-[100px] h-[100px] mx-auto' />
                        <h2 className='text-center text-[25px] font-bold text-[#B52555]'>{que.title}</h2>
                        <p className='text-center text-[18px]'>{que.des}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Common;