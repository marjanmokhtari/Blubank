"use client"
import React from 'react';

import Vid from '../section2/vid'
import Myslider from './slider';

export default function SectionTwo() {
    return (
        <section className=' w-full flex '>
            <section className='w-full  py-5 flex justify-center *:lg:px-32  '>
                <section className=' w-full  justify-center   flex  flex-wrap 2xl:container'>
                    <SecSlid />
                    <SecVid />
                </section>
            </section>

        </section>
    );
}

function SecSlid() {
    return (
        <section className='xl:w-1/3 w-full order-last xl:order-first mx-10 xl:mx-0 '>
            <section className='*:w-[100%]'>
                <Vid></Vid>
            </section>

        </section>
    );
}

function SecVid() {
    return (
        <section className='xl:w-2/3 w-full *:w-full md:my-0 my-20  '>
            <section className=' '>
                <Myslider></Myslider>
            </section>
        </section>
    );
}
