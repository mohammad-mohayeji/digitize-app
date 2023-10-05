import React from 'react'

import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useSwiper } from 'swiper/react'

export default function SwiperNavBtns() {
    const swiper = useSwiper()
  return (
    <div className="flex items-center gap-2">
        <button onClick={(e)=> swiper.slidePrev()} className="w-10 h-10 bg-white shadow rounded-full flex justify-center items-center"><ChevronRightIcon className="w-6 h-6"/></button>
        <button onClick={(e)=> swiper.slideNext()} className="w-10 h-10 bg-white shadow rounded-full flex justify-center items-center"><ChevronLeftIcon className="w-6 h-6"/></button>
    </div>
  )
}
