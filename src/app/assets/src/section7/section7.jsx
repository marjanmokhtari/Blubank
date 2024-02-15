import React from 'react'
import Button from '@mui/material/Button';  



import AccordionUsage from '../section7/accordion'
export default function section7() {
    return (
        <section className=' w-full my-20 flex flex-wrap justify-center'>
            <section className=' w-full 2xl:container lg:px-28 px-7 md:px-11 flex flex-wrap justify-center'>
                <h3 className=' text-3xl font-bold text-[#4b94ea] w-full flex justify-center my-10'>سوالات متدوال</h3>
                <AccordionUsage></AccordionUsage>
                <div className=' w-full flex flex-wrap justify-center py-5'>
                    <h3 className='text-[#7c7d8a] text-xl w-full justify-center flex py-4'>خط ارتباطی برای پاسخ به سوالات شما</h3>
                    <Button className='bg-[#3094ea] px-7 rounded-3xl font-bold text-lg' variant="contained">بلو لاین</Button>
                </div>
            </section>
        </section>
    )
}
