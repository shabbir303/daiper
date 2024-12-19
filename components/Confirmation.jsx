// pages/confirmation.js
import React from "react";

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold  text-green-700 mb-4">
          অর্ডারটি করার জন্য আপনাকে ধন্যবাদ, আমাদের একজন প্রতিনিধি অর্ডারটি কনফার্ম করার জন্য আপনাকে দ্রুত কল করবে🌟
        </h2>
        <div className="border-t border-gray-300">
          <div className="py-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Product</span>
              <span className="text-gray-800">(চিপস) রি-ব্র্যান্ডেড ডায়াপার × 1</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600 font-medium">Subtotal:</span>
              <span className="text-gray-800">৳ ৯৯৯.০০</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600 font-medium">Shipping:</span>
              <span className="text-gray-800">ডেলিভারি চার্জ ফ্রি</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600 font-medium">Payment method:</span>
              <span className="text-gray-800">ক্যাশ অন ডেলিভারি</span>
            </div>
            <div className="flex justify-between items-center mt-4 border-t pt-4 border-gray-300">
              <span className="text-gray-600 font-semibold">Total:</span>
              <span className="text-gray-800 font-bold">৳ ৯৯৯.০০</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
