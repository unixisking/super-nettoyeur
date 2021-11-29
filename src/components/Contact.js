import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

const schema = yup
  .object({
    name: yup.string().required("Veuillez indiquer votre nom"),
    email: yup
      .string()
      .email("Veuillez indiquer une adresse e-mail valide")
      .required("Veuillez indiquer votre adresse e-mail"),
    phone: yup.string().required("Veuillez indiquer votre numéro de téléphone"),
    // .required("Veuillez indiquer votre numéro de téléphone"),
    message: yup.string(),
  })
  .required()

export default function Contact({ blok }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = formData => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => navigate("/merci"))
      .catch(err => console.error(err))
  }
  console.log("errros", errors)
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div
          style={{ background: "#F0F8ED" }}
          className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
        >
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-darkbg sm:text-3xl">
              {blok.title}
            </h2>
            {blok.paragraph && (
              <p className="mt-3 text-lg leading-6 text-darkbg">
                {blok.paragraph}
              </p>
            )}
            <div className="text-gray-300 text-base flex flex-col">
              <div className="flex">
                <FaMapMarkerAlt className="text-2xl text-primarybg" />
                <p className="text-darkbg text-md ml-4">{blok.address}</p>
              </div>
              <div className="flex">
                <FaPhoneAlt className="text-2xl text-primarybg" />
                <p className="text-darkbg text-md ml-4">{blok.phone}</p>
              </div>
              <div className="flex">
                <GrMail className="text-2xl text-primarybg" />
                <p className="text-darkbg text-md ml-4">{blok.email}</p>
              </div>
              <div className="flex">
                <FaClock className="text-2xl text-primarybg" />
                <p className="text-darkbg text-md ml-4">{blok.timeline}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Votre nom"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primarybg focus:border-primarybg border-gray-300 rounded-md"
                />
                <p className="text-sm text-red-500 mt-2">
                  {errors.name?.message}
                </p>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  placeholder="contact@super-nettoyage.ch"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primarybg focus:border-primarybg border-gray-300 rounded-md"
                />
                <p className="text-sm text-red-500 mt-2">
                  {errors.email?.message}
                </p>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="078 605 33 63"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primarybg focus:border-primarybg border-gray-300 rounded-md"
                />
                <p className="text-sm text-red-500 mt-2">
                  {errors.phone?.message}
                </p>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primarybg focus:border-primarybg border border-gray-300 rounded-md"
                  placeholder="Message"
                  defaultValue={""}
                />
                <p className="text-sm text-red-500 mt-2">
                  {errors.service?.message}
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primarybg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primarybg"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
