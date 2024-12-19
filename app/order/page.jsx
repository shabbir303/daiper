import OrderForm from "@/components/OrderForm";
import React from "react";

const Order = () => {
  return (
    <>
      {/* <div>
      <h1 className='text-center text-[30px] font-bold bg-[#7B00AD] md:w-[1200px] mx-auto my-[100px] text-white rounded-xl'>অর্ডার করতে নিচের ফর্মে আপনার নাম, পূর্ণ ঠিকানা এবং মোবাইল নাম্বার লিখুন।</h1>
      </div> */}
      {/* <div className="flex flex-col md:flex-row justify-between px-8 py-8 bg-gray-100 ">
        
      
      <div className="w-full md:w-1/2 pr-8">
        <h2 className="text-2xl font-bold mb-4">অর্ডারের তথ্য</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              আপনার নাম লিখুন *
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
              placeholder="আপনার নাম লিখুন"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              আপনার পূর্ণ ঠিকানা লিখুন *
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
              placeholder="আপনার ঠিকানা লিখুন"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              আপনার মোবাইল নাম্বার *
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-600"
              placeholder="মোবাইল নাম্বার"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              সাইজ সিলেক্ট করুন *
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="size" className="mr-2" />
                ০ থেকে ১ বছর
              </label>
              <label className="flex items-center">
                <input type="radio" name="size" className="mr-2" />
                ১ থেকে ২ বছর
              </label>
              <label className="flex items-center">
                <input type="radio" name="size" className="mr-2" />
                ২ থেকে ৩ বছর
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      {/* <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">আপনার অর্ডার</h2>
        <div className="border p-4 rounded bg-white shadow-md">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/60" // Replace with actual product image URL
                alt="product"
                className="w-12 h-12 mr-2 rounded"
              />
              <p className="text-gray-700">(৪ পিস) রি-ইউজেবল ডায়াপার</p>
            </div>
            <p className="text-gray-800 font-bold">৳ 999.00</p>
          </div>

          <div className="flex justify-between border-t pt-2">
            <p className="text-gray-600">Subtotal</p>
            <p>৳ 999.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping</p>
            <p className="text-green-500">ডেলিভারি চার্জ ফ্রি</p>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <p>Total</p>
            <p>৳ 999.00</p>
          </div>
        </div>

        
        <div className="bg-gray-100 p-4 rounded mt-4">
          <p className="font-bold mb-2">ক্যাশ অন ডেলিভারি</p>
          <p className="text-gray-600 mb-2">
            অগ্রিম কোনো টাকা ছাড়াই অর্ডার করুন 👇
          </p>
        </div>

   
        <button className="w-full mt-4 py-3 bg-purple-600 text-white rounded font-bold hover:bg-purple-700">
          কনফার্ম অর্ডার ৳ 999.00
        </button>
      </div>
    </div>  */}

    <OrderForm/>
    
    </>
  );
};

export default Order;
