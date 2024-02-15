import React from 'react'
// import Vid2 from '../../img/vid2.mp4'

export default function Section_five() {
  return (
    <section className=' w-full  flex justify-center flex-wrap mt-28'>
        <section className=' w-full 2xl:container  flex flex-wrap lg:px-36 px-10 '>
            <section className=' xl:w-1/2 w-full  flex flex-wrap content-center'>
            <h3 className='text-3xl text-[#3094ea] w-full font-bold'>شناسایی هویت </h3>
            <p className='text-[#737789] xl:w-[90%] w-full my-3  leading-10' >“اینجانب مهرداد اندامی با کد ملی ۱۲۳۴۵۶۷۸۹۰ درخواست بازکردن حساب در بلو را دارم.” یک ویدیو ۴۵ ثانیه‌ای با عبارت خواسته مشابه نمونه بالا ضبط و ارسال کنید.</p>
            </section>
            <section className=' xl:w-1/2 w-full order-first xl:order-last '>
                <video autoPlay muted loop>
                    <source src='https://blubank.sb24.ir/static/KYC-2f7a21a0db455f1c536551b13081aa4f.mp4' type='video/mp4' />
                </video>
            </section>
        </section>
    </section>
  )
}
