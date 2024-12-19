"use client";

import React, { useRef, useState } from "react";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { SlCallOut } from "react-icons/sl";




const OrderForm = () => {
  const router = useRouter();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    size: "",
  });

  const handleChange = (e) => {


    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/sendEmail", form);
      if (response.status === 200) {
        toast.success("Order sent successfully!");
        setForm({
          name: "",
          address: "",
          phone: "",
          size: "",
        });
        router.push("/confirmation");
      }
    } catch (error) {
      toast.error("Failed to send order. Please try again.");
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center text-[20px]  md:text-[30px] font-bold bg-[#B52555] md:w-[1200px] mx-auto mt-[100px] mb-[30px] text-white rounded-xl">
          অর্ডার করতে নিচের ফর্মে আপনার নাম, পূর্ণ ঠিকানা এবং মোবাইল নাম্বার লিখুন।
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-8 py-8 bg-gray-100" id="order-section">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 pr-8">
          <h2 className="text-2xl font-bold mb-4">অর্ডারের তথ্য</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">আপনার নাম লিখুন *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#B52555]"
                placeholder="আপনার নাম লিখুন"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">আপনার পূর্ণ ঠিকানা লিখুন *</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#B52555]"
                placeholder="আপনার ঠিকানা লিখুন"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">আপনার মোবাইল নাম্বার *</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#B52555]"
                placeholder="মোবাইল নাম্বার"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">সাইজ সিলেক্ট করুন *</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    value="০ থেকে ১ বছর"
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  ০ থেকে ১ বছর
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    value="১ থেকে ২ বছর"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  ১ থেকে ২ বছর
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    value="২ থেকে ৩ বছর"
                    onChange={handleChange}
                    className="mr-2"
                  />
                  ২ থেকে ৩ বছর
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#B52555] text-white rounded font-bold hover:bg-purple-700"
            >
              কনফার্ম অর্ডার
            </button>

          </form>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">আপনার অর্ডার</h2>
          <div className="border p-4 rounded bg-white shadow-md">
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <img
                  src="/logoBaby.jpg"
                  alt="product"
                  className="w-12 h-12 mr-2 rounded"
                />
                <p className="text-gray-700">(৪ পিস) রি-ইউজেবল বেবি ডায়াপার</p>
              </div>
              <p className="text-gray-800 font-bold">৳ ৯৫০.০০</p>
            </div>
            <div className="flex justify-between border-t pt-2">
              <p className="text-gray-600">Subtotal</p>
              <p>৳ ৯৫০.০০</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Shipping</p>
              <p className="text-green-500">ডেলিভারি চার্জ ফ্রি</p>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <p>Total</p>
              <p>৳ ৯৫০.০০</p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-md shadow-md mt-3">
            <h2 className="text-lg font-bold text-gray-800">ক্যাশ অন ডেলিভারি</h2>
            <div className="bg-gray-200 p-2 rounded-md my-2">
              <p className="text-gray-700">অগ্রিম কোন টাকা ছাড়াই অর্ডার করুন👇</p>
            </div>
            <p className="text-sm text-gray-500">
              Your personal data will be used to process your order, support your
              experience throughout this website, and for other purposes described in
              our <span className="text-blue-500 cursor-pointer">privacy policy</span>.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-md shadow-md mt-3 flex flex-wrap items-center gap-[20px]">
            <h1 className="text-lg font-bold text-gray-800">প্রয়োজনে কল করুন</h1>
            <div className="flex items-center gap-2">
              <h1 className="text-[25px] text-green-700">
              <SlCallOut /> 
              </h1>
              <h2 className="text-[20px] font-semibold">01794638464</h2>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default OrderForm;
