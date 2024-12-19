import React from 'react';
import Slider from './Swiper';

const Variation = () => {
    return (
        <div className='container mt-[100px] md:w-[1200px] mx-auto'>
            <h1 className='text-[25px] md:text-[40px] font-bold text-black text-center'>আমাদের ডাইপারের <span className='text-[#7A00AD]'>কিছু ছবি</span></h1>
            <div className='mt-[15px]'>
                <Slider/>
            </div>
        </div>
    );
};

export default Variation;