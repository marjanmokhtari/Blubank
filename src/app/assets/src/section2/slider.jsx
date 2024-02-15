import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoRemoveOutline } from "react-icons/io5";
import Image from 'next/image';
import Svg1 from '../../img/1.svg'
import Svg2 from '../../img/2.svg'
import Svg3 from '../../img/3.svg'
import Svg_Download from '../../img/download (3).svg'


import '../../../../../node_modules/swiper/modules/pagination.css'
import '../../../../../node_modules/swiper/modules/navigation.css'
import '../../../../../node_modules/swiper/swiper.min.css'

import './style.css'

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function Myslider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Keyboard, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Det_slid1></Det_slid1>
                </SwiperSlide>
                <SwiperSlide>
                    <Det_sec2></Det_sec2>
                </SwiperSlide>
                <SwiperSlide>
                    <Det_sec3></Det_sec3>
                </SwiperSlide>

            </Swiper>
        </>
    );
}



function Det_slid1() {
    return (
        <section className='  h-[500px] mx-10'>
            <section className=' w-full  h-3/4 flex flex-wrap content-center'>
                <h6 className=' flex justify-start text-[#3094ea] text-3xl py-4'>حفاظت از سرمایه مشتریان</h6>
                <nav>
                    <ul className=' flex flex-wrap *:my-1'>
                        <li className='flex   w-full *:text-start'>
                            <p className=' flex text-[#737789]'>
                                <span className='text-[#4b94ea] pt-1 me-2 '><IoRemoveOutline></IoRemoveOutline></span>مبالغ سپرده مشتریان در چاچوب ضوابط قانونی و تا سقف قانونی تعیین شده مورد تضمین صندوق ضممانت سپرده های  بانک مرکرزی است.</p>
                        </li>
                        <li className='flex   w-full *:text-start'>
                            <p className=' flex text-[#737789]'>
                                <p className='text-[#4b94ea] pt-1 me-2 '><IoRemoveOutline></IoRemoveOutline></p>ما همه ی اطلاعات حساب ها و مدارک هویتی مشتریان خود را محرمانه تلقی کرده و متعهد می&zwnj;شویم تحت هر شرایطی جز در موارد قانونی از انتشار آن جلوگیری کرده و مسئولیت این موضوع را به طور کامل می پذیریم.
                            </p>
                        </li>
                    </ul>
                </nav>

            </section>
        </section >
    )
}

function Det_sec2() {
    return (
        <section className='h-[500px]  flex justify-center '>
            <section className=' w-full    flex flex-wrap    *:flex-wrap md:*:w-1/3   *:w-full mx-10  *:justify-center *:px-2  '>
                <div className=' *:w-full flex justify-center '>
                    <div className='w-full flex justify-center flex-wrap content-center  '>
                        <figure className=' w-[50px] '>
                            <Image className='' src={Svg1} alt="logo" />
                        </figure>
                        <div className=' bg-[#ebf4fc] w-full px-5 py-10   rounded-3xl'>
                            <p className='text-[16px] text-black'>بدون حداقل موجودی حساب</p>
                            <p className='text-[#4b94ea] '>در بلو برای باز کردن حساب نیاز به حتی یک ریال موجودی نیست</p>
                        </div>
                    </div>
                </div>

                <div className=' *:w-full flex '>
                    <div className=' flex flex-wrap content-center justify-center text-center'>
                        <figure className=' w-[60px]'>
                            <Image src={Svg2} alt="logo" />
                        </figure>
                        <div className=' bg-[#ebf4fc] w-full px-5 py-10   rounded-3xl'>
                            <p className='text-[16px] text-black'>بدون حداقل موجودی حساب</p>
                            <p className='text-[#4b94ea] '>در بلو برای باز کردن حساب نیاز به حتی یک ریال موجودی نیست</p>
                        </div>
                    </div>
                </div>


                <div className=' *:w-full  hidden md:flex '>
                    <div className=' flex flex-wrap content-center justify-center text-center'>
                        <figure className=' w-[60px]'>
                            <Image src={Svg3} alt="logo" />
                        </figure>
                        <div className=' bg-[#ebf4fc] w-full px-5 py-10   rounded-3xl'>
                            <p className='text-[16px] text-black'>بدون حداقل موجودی حساب</p>
                            <p className='text-[#4b94ea] '>در بلو برای باز کردن حساب نیاز به حتی یک ریال موجودی نیست</p>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    )
}


function Det_sec3() {
    return (
        <section className=' w-full text-start flex flex-wrap justify-start  h-[400px] mx-10  items-center *:flex content-center'>
            <section className=' w-full flex h-full flex-wrap content-center *:my-2 ' >
                <h3 className='text-[#3094ea] text-3xl w-full font-bold' >بلو؛ بانک ولی دوست‌داشتنی</h3>
                <p className='text-[#737789] xl:w-2/3 w-full flex  text-start' >بلو، پلتفرمی تمام دیجیتال است که همه‌ی عملیات بانکداری روی اپلیکیشن موبایل و کاملا آنلاین انجام می‌شود. به زبان ساده،  بانکی است که همیشه همراه شما خواهد بود.</p>
                <div className=' w-full flex pt-10  '>
                    <div className=' w-[150px] flex justify-center  '>
                        <Image className='rounded-[50px] bg-[#3094ea]' src={Svg_Download}></Image>
                    </div>
                </div>
            </section>
        </section>
    )
}
