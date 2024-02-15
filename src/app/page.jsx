import React from 'react'
import './globals.css'
import Section_one from './assets/src/section1/section1'
import Section_Tow from './assets/src/section2/section2'
import Section_three from './assets/src/section3/section3'
import Section_four from './assets/src/section4/section4'
import Section_five from './assets/src/section5/section5'
import Section_six from './assets/src/section6/section6'
import Section_seven from './assets/src/section7/section7'


export default function Page() {
  return (
    <main className='w-full bg-white flex flex-wrap justify-center'>

      <Section_one></Section_one>
      <Section_Tow></Section_Tow>
      <Section_three></Section_three>
      <Section_four></Section_four>
      <Section_five></Section_five>
      <Section_six></Section_six>
      <Section_seven></Section_seven>
    </main>
  )
}
