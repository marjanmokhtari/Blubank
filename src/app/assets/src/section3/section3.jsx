"use client"
import React, { useState } from 'react';

import RED_cart from '../../img/red.png';
import Green_cart from '../../img/green.png';
import Blue_cart from '../../img/blue.png';
import Image from 'next/image';

export default function Section_three() {
  const [selectedImage, setSelectedImage] = useState(RED_cart);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className='w-full py-4 flex flex-wrap justify-center mt-20'>
      <section className='w-full 2xl:container py-5 flex flex-wrap'>
        <section className='w-full flex lg:px-28 px-10 justify-center'>
          <Sec_cart
            selectedImage={selectedImage}
            handleClick={handleClick}
            RED_cart={RED_cart}
            Green_cart={Green_cart}
            Blue_cart={Blue_cart}
          />
        </section>
      </section>
    </section>
  );
}

function Sec_cart({ selectedImage, handleClick, RED_cart, Green_cart, Blue_cart }) {
  return (
    <section className='w-full lg:px-24 flex justify-center'>
      <section className='md:w-1/2 mt-28 w-full md:relative absolute z-10'>
        <nav className='mx-10 md:mx-0'>
          <h3 className='text-3xl text-[#3094ea] font-bold pb-10'>بلو، فقط آبی نیست ...</h3>
          <ul className='*:pb-5 text-black *:text-[#737789]'>
            <li className='flex w-full *:text-start'>
              <p className='flex'>عضو سامانه شتاب بانک مرکزی</p>
            </li>
            <li>
              <p className='flex'>ارسال رایگان کارت بانکی به آدرس دلخواه شما در کمتر از ۵ روز کاری در تهران و ۱۰ روز کاری در سایر نقاط کشور</p>
            </li>
            <li>
              <p className='flex'>دریافت و فعال‌سازی آنلاین رمزهای کارت از طریق اپلیکیشن بلو</p>
            </li>
            <li>
              <p className='flex'>
                <p className='text-[#4b94ea] '></p>
                امکان مسدودکردن کارت از طریق اپلیکیشن بلو
              </p>
            </li>
          </ul>
        </nav>
        <div className='flex justify-end *:mx-1 my-10 justify-center'>
          <button className='rounded-full bg-[#3094ea] w-[12px] h-[12px]' onClick={() => handleClick(Blue_cart)}></button>
          <button className='rounded-full bg-[#0fa581] w-[12px] h-[12px]' onClick={() => handleClick(Green_cart)}></button>
          <button className='rounded-full bg-[#ff0000] w-[12px] h-[12px]' onClick={() => handleClick(RED_cart)}></button>
        </div>
      </section>
      <section className='md:w-1/2 w-full '>
        <figure className='myanime'>
          <Image src={selectedImage} />
        </figure>
      </section>
    </section>
  );
}
