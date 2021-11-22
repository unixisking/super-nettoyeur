import React from "react"
import SwiperCore, { Pagination, Keyboard } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import DynamicComponent from "./dynamicComponent"

import "swiper/css"
import "swiper/css/pagination"

SwiperCore.use([Pagination, Keyboard])

export default function Slider({ blok }) {
  return (
    <div className="py-12 bg-secondarybg">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {blok.columns.map(component => (
            <DynamicComponent key={component._uid} blok={component} />
          ))}
        </dl>
      </div>
    </div>
  )
}
