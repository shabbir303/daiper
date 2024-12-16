"use client"

import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import OrderBtn from './OrderBtn';

const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false); // Track video play state

    const handlePlayVideo = () => {
        setIsPlaying(true); // Start video playback
    };
    return (
        <div className=' bg-[#B52555] relative pb-[30px] mb-[30px]'>
            <h1 className='text-center text-[49px] pt-[20px] font-bold text-white'>কিনুন একবার-<span className='text-[#FFFF00]'>ব্যবহার করুন বারবার!</span></h1>
             {/* Video Container */}
             <div className="relative mt-5 mx-auto md:w-[890px] md:h-[500px] rounded-2xl">
                {/* ReactPlayer for YouTube */}
                <ReactPlayer
                    className="rounded-2xl"
                    url="https://youtu.be/gnKM9X7uaS8" // YouTube Video URL
                    playing={isPlaying} // Play when button is clicked
                    controls // Show playback controls
                    width="100%"
                    height="100%"
                />

                {/* Play Button */}
                {!isPlaying && (
                    <button
                        onClick={handlePlayVideo}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold rounded-2xl"
                    >
                        ▶ Play Video
                    </button>
                )}
            </div>
            <h1 className='md:w-[1200px] text-center mx-auto text-[34px] font-medium text-white leading-[60px] mt-[30px]'>অন্যান্য ডায়াপারের মত বারবার কেনার ঝামেলা নাই। কম দামে, নকল ডায়াপার কিনে নিজের লস করতে না চাইলে ভিডিও টি সম্পূর্ন দেখুন।</h1>
            <h1 className='text-center text-[#FFFF00] font-semibold text-[28px]'>4 পিস ডাইপার ৯৯৯ টাকা ডেলিভারি চার্জ ফ্রি</h1>
           <OrderBtn/>
        </div>
    );
};

export default Video;