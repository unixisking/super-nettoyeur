import React from "react"
import SwiperCore, { Pagination, Keyboard } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import DynamicComponent from "./dynamicComponent"

import "swiper/css"
import "swiper/css/pagination"

SwiperCore.use([Pagination, Keyboard])

export default function Slider({ blok }) {
  return (
    <Swiper
      className="mb-12"
      direction="horizontal"
      slidesPerView={3}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      navigation
      pagination
      mousewheel
      keyboard
      loop
      autoplay
    >
      {blok.columns.map(component => (
        <SwiperSlide className="flex justify-center">
          <DynamicComponent key={component._uid} blok={component} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
