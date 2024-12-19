// import React from 'react';
// import OrderBtn from './OrderBtn';

// const Que = () => {
//     return (
//         <div className='mt-[80px] md:w-[1200px] mx-auto'>
//             <h1 className='text-center text-[28px] md:text-[40px] font-bold bg-[#B52555]  text-white rounded-xl'>কেন কিনবেন এই ডায়াপারগুলো।</h1>
//             <ul className='text-center text-[20px] md:text-[25px] font-semibold mt-[20px] space-y-4'>
//                 <li className='flex  items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]flex-shrink-0'/> <span>সম্পূর্ণ ওয়াটার প্রুফ হওয়ায় পানি লিক করবে না।</span></li>
//                 <li className='flex  text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/> সম্পূর্ণ ওয়াটার প্রুফ হওয়ায় পানি লিক করবে না।</li>
//                 <li className='flex text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/>অন্যান্য ডায়াপারের মত বারবার কেনার ঝামেলা নাই।</li>
//                 <li className='flex text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/>একই ডায়াপার বারবার ব্যবহার করা যায় বিধায় খরচ সাশ্রয় করে</li>
//                 <li className='flex text-center items-center gap-4 '><img src="/tick.svg" alt="" className='w-[20px] h-[20px]'/>ক্যামিকেল মুক্ত আর কাপড়ের তৈরী হওয়ায় বাচ্চার ত্বকের ক্ষতি করে না।</li>
//             </ul>
//                <OrderBtn/>
//         </div>
//     );
// };

// export default Que;


import React from 'react';
import OrderBtn from './OrderBtn';

const Que = () => {
    return (
        <div className='mt-10 px-4 md:w-[90%] lg:w-[1200px] mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold bg-[#B52555] text-white rounded-xl py-4'>
                কেন কিনবেন এই ডায়াপারগুলো।
            </h1>
            <ul className='mt-6 space-y-4'>
                {[
                    "গরমে ব্যবহার উপযোগী কাপড় দিয়ে তৈরী।",
                    "সম্পূর্ণ ওয়াটার প্রুফ হওয়ায় পানি লিক করবে না।",
                    "অন্যান্য ডায়াপারের মত বারবার কেনার ঝামেলা নাই।",
                    "একই ডায়াপার বারবার ব্যবহার করা যায় বিধায় খরচ সাশ্রয় করে।",
                    "ক্যামিকেল মুক্ত আর কাপড়ের তৈরী হওয়ায় বাচ্চার ত্বকের ক্ষতি করে না।"
                ].map((text, index) => (
                    <li key={index} className='flex items-center text-lg md:text-2xl gap-2 md:font-medium'>
                        <img src="/tick.svg" alt="✔" className='w-5 h-5 flex-shrink-0' />
                        <span>{text}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <OrderBtn />
            </div>
        </div>
    );
};

export default Que;
