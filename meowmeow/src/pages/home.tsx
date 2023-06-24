import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import { useEffect, useState } from 'react'
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='bg-white min-h-screen'>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-2 sm:py-4 lg:py-6">
            <div className="flex flex-row justify-center items-center">
            <h1 className="text-6xl text-black font-bold leading-relaxed drop-shadow-md">
            เป็น Meow ไร
            </h1>
          <img
          className="object-cover h-full w-full "
          src="/cat.png"
          />
        </div>
        </div>
      </div>
      </div>
    </main>
  )
}
