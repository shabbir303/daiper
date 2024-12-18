"use client"

import { useState } from "react";


const Add = () => {

    const [quantity, setQuantity] = useState(1);
   
    const stock = 4;

    const handleQuantity = (operation) => {
        setQuantity((prev) => {
            if (operation === "i" && prev < stock) {
                return prev + 1; // Increment if within stock limit
            }
            if (operation === "d" && prev > 0) {
                return prev - 1; // Decrement if greater than 0
            }
            return prev; // No change if conditions are not met
        });
    };
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-semibold">Choose the Quantity</h1>
            <div className="flex items-center gap-4">
                
                    <div className="bg-gray-300 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("d")}>-</button>
                        {quantity}
                        <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("i")}>+</button>
                    </div>
                    <div>
                        <h1 className="text-xs">You select only <span className="text-orange-500">4 items! 
                        </span> <br />Don't miss it</h1>
                    </div>
                
            </div>
            <button className="w-36 text-sm rounded-3xl ring-1 ring-red-500 text-red-500 py-2 px-4 hover:bg-red-500  hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">Buy now</button>
        </div>
    );
};

export default Add;