"use client"
import React, { useState } from 'react'
import Logo from '../../img/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import '../../../globals.css'
import { RiMenuFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import Desk_pic from '../../img/blue-dsektop.jpg'
import Mob_pic  from '../../img/blue-mobile.jpg'











export default function Section_one() {
    return (
        <section className=' w-full  flex flex-wrap justify-center '>
            <section className=' w-full  flex flex-wrap justify-center'>
                <MyHeader></MyHeader>
                <Headbot></Headbot>{/* under the main header because it is a fix */}
                <Details_sec1></Details_sec1>
            </section>
        </section>
    )
}




function MyHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const openmenu = () => {
        setIsMenuOpen(true);
        console.log('hkhh');
    };

    const closemenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className='w-full h-[100px] z-50 fixed shadow-md shadow-gray-200 flex justify-center bg-white'>
            <section className='w-full flex 2xl:container justify-center text-black relative'>

                <div className='w-[20%] md:flex justify-center items-center hidden'>
                    <span className='bg-[#3094ea] p-3 border rounded-[25px] text-white'>باز کردن حساب بلو</span>
                </div>

                {/*  desktop menu  */}
                <nav className='hidden lg:flex w-[60%] justify-center items-center'>
                    <ul className='flex gap-6'>
                        <Link href='/about'>درباه ما</Link>



                        <li><Link href='/'> بلاگ</Link></li>
                        <li><Link href='/'>سوالات متداول </Link></li>
                        <li><Link href='/'>موقعیت شغلی </Link></li>
                        <li><Link href='/'> بلو جونیور</Link></li>
                    </ul>
                </nav>
                {/* end desktop menu */}

                {/*  sm & lg menu  */}
                <nav className='w-[60%] lg:hidden flex py-5 justify-start md:justify-end items-center'>
                    <RiMenuFill onClick={openmenu} className='text-black text-2xl'></RiMenuFill>
                    {isMenuOpen && (
                        <nav className='absolute my right-0 top-0  w-[100%] h-[100vh] bg-white'>
                            <ul className='ps-5'>
                                <li className='flex justify-end p-3 text-3xl' onClick={closemenu}><AiOutlineClose ></AiOutlineClose></li>
                                <li className=' w-full '>
                                    <ul className='*:my-4'>
                                        <li><Link href='/about'>درباه ما</Link></li>
                                        <li><Link href='/'> بلاگ</Link></li>
                                        <li><Link href='/'>سوالات متداول </Link></li>
                                        <li><Link href='/'>موقعیت شغلی </Link></li>
                                        <li><Link href='/'> بلو جونیور</Link></li>

                                    </ul>
                                </li>
                                <li className='flex justify-center *:text-2xl *:mx-1 *:text-white'>
                                    <span className=' bg-[#e4e4ee] p-2 rounded-full'><FaInstagram></FaInstagram></span>
                                    <span className=' bg-[#e4e4ee] p-2 rounded-full'><FaLinkedin></FaLinkedin></span>
                                    <span className=' bg-[#e4e4ee] p-2 rounded-full'><FaTwitterSquare></FaTwitterSquare></span>
                                </li>
                            </ul>
                        </nav>
                    )}
                </nav>
                {/*  end menu  */}

                <figure className='w-[20%] flex justify-center items-center'>
                    <Image className='w-[70px]' src={Logo} alt=""></Image>
                </figure>

            </section>
        </header>
    );
}



function Headbot() {
    return (
        <section className='w-full h-[100px]'></section>
    )
}
function Details_sec1() {
    return (
        <section className=' w-full  2xl:container flex justify-center lg:py-24 py-10 '>
            <figure className='w-[80%] hidden sm:flex'>
                <Image className=' rounded-2xl' src={Desk_pic} alt="" />
            </figure>
            <figure className='w-[90%] sm:hidden'>
                <Image className=' rounded-2xl' src={Mob_pic} alt="" />
            </figure>
        </section>

    )
}
