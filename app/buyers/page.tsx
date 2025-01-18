import React from 'react'
import { Navbar } from '@/components/derived/navbar'
import { Footer } from '@/components/derived/footer'
import Herosection from './../../components/derived/Herosection';
import { AboutBuyers } from '@/components/derived/AboutBuyers';
import AboutBuyersSupport from '@/components/derived/AboutBuyersSupport';
import BuyerTestimonials from '@/components/derived/Buyerstestimonals';
import BuyersConnect from '@/components/derived/BuyersConnect';
import Gallery from '@/components/derived/Buyersinfo';
const page = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='p-5'></div>
  <Herosection/>
 <AboutBuyers></AboutBuyers>
 <Gallery></Gallery>
 <AboutBuyersSupport></AboutBuyersSupport>
 <BuyerTestimonials></BuyerTestimonials>
 <BuyersConnect></BuyersConnect>
    <Footer/>

    </>
  )
}

export default page