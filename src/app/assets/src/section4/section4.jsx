import Image from 'next/image';
import React from 'react'
import bluline from '../../img/bluline.png';

export default function Section_four() {
    return (
        <section className=' w-full bg-[#3997e9]  flex flex-wrap justify-center py-20 mt-20'>
            <section className=' w-full 2xl:container'>
                <section className=' w-full  justify-center flex flex-wrap px-10 lg:px-36 '>
                    <section className='w-full lg:w-1/2'>
                       
                            <Image src={bluline}></Image>
                        
                    </section>
                    <section className='w-full lg:w-1/2 flex flex-wrap content-center order-first lg:order-last  '>
                        <h3 className=' text-3xl font-bold mt-5 w-full flex ' >بلولاین؛ همیشه به وقت همه‌جا</h3>
                        <p  className=' w-[90%]  my-3 leading-10 '>اگر سوالی دارید، در چت اپلیکیشن بلو پیام صوتی و یا متنی بگذارید، یا با شماره ۸۷۶۴۱-۰۲۱ تماس بگیرید.<br></br> کارشناسان بلولاین همیشه آماده‌ی پاسخ‌گویی و حل مشکلات احتمالی شما هستند.</p>

                    </section>

                </section>
            </section>
        </section>
    )
}
