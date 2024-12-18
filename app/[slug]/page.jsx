import Add from '@/components/Add';
import CustomizeProduct from '@/components/CustomizeProduct';
import OrderForm from '@/components/OrderForm';
import ProductImages from '@/components/ProductImages';
import React from 'react';

const OrderPage = () => {
    return (
        <div className='mt-[50px] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
            {/* image */}
            
            <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
                <ProductImages/>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                <h1 className='text-4xl font-medium'>Product Name</h1>
                <p className='text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt?</p>
                <div className='h-[2px] bg-gray-100'/>
                <div className='flex items-center gap-4'>
                    <h1 className='text-xl text-gray-500 line-through'>Tk.1200</h1>
                    <h1 className='font-medium text-2xl'>Tk.999</h1>
                </div>
                <div className='h-[2px] bg-gray-100'/>
                <CustomizeProduct/>
                <Add/>
                <div className='h-[2px] bg-gray-100'/>
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt voluptate beatae repellat culpa illo quasi impedit enim pariatur modi?</p>
                </div>
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt voluptate beatae repellat culpa illo quasi impedit enim pariatur modi?</p>
                </div>
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt voluptate beatae repellat culpa illo quasi impedit enim pariatur modi?</p>
                </div>
            </div>
            
        </div>
    );
};

export default OrderPage;