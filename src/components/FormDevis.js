import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { FaWhatsapp } from "react-icons/fa"
import { SERVICES } from "../helpers"
import { navigate } from "gatsby-link"

const schema = yup
  .object({
    name: yup.string().required("Veuillez indiquer votre nom"),
    email: yup
      .string()
      .email("Veuillez indiquer une adresse e-mail valide")
      .required("Veuillez indiquer votre adresse e-mail"),
    phone: yup.string().required("Veuillez indiquer votre numéro de téléphone"),
    // .required("Veuillez indiquer votre numéro de téléphone"),
    service: yup.string().required("Veuillez choisir un type de service "),
    message: yup.string(),
  })
  .required()

export default function FormDevis() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = formData => {
    fetch("/api/get_devis", {
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
    <div className="relative mt-6 rounded-lg flex flex-col max-w-7xl sm:mt-8 bg-secondarybg">
      <span className="border-b-1 bg-primarytext border-primarytext w-12" />
      {/* <i
        id="round-dvidier"
        className="bg-gray-900 h-2 w-2 rounded-full mx-auto mt-12"
      /> */}
      <span className="border-b-1 border-primarytext w-12" />
      <div className="py-10 px-6 sm:px-10 xl:py-12 xl:px-48">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900"
            >
              Nom*
            </label>
            <div className="mt-1">
              <input
                {...register("name")}
                type="text"
                placeholder="Votre nom"
                name="name"
                id="name"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 border-gray-300 focus:ring-primarybg focus:border-primarybg rounded-md"
              />
              <p className="text-sm text-red-500 mt-2">
                {errors.name?.message}
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Adresse mail*
            </label>
            <div className="mt-1">
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                placeholder="contact@super-nettoyage.ch"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-primarybg focus:border-primarybg border-gray-300 rounded-md"
              />
              <p className="text-sm text-red-500 mt-2">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900"
              >
                Téléphone*
              </label>
            </div>
            <div className="mt-1">
              <input
                {...register("phone")}
                type="text"
                name="phone"
                placeholder="078 605 33 63"
                id="phone"
                autoComplete="tel"
                className="py-3 px-4 block w-full shadow-sm text-gray-900 border-gray-300 focus:ring-primarybg focus:border-primarybg rounded-md"
                aria-describedby="phone-optional"
              />
              <p className="text-sm text-red-500 mt-2">
                {errors.phone?.message}
              </p>
            </div>
          </div>
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Type de service*
            </label>
            <select
              {...register("service")}
              className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-primarybg focus:border-primarybg sm:text-sm rounded-md"
              defaultValue="-"
            >
              <option
                value="-"
                placeholder="Choisir une prestation"
                selected
                disabled
                hidden
              >
                -
              </option>
              {SERVICES.map(service => (
                <option>{service}</option>
              ))}
            </select>
            <p className="text-sm text-red-500 mt-2">
              {errors.service?.message}
            </p>
          </div>
          <div className="col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <span className="text-sm text-gray-500" id="email-optional">
                Optionnel
              </span>
            </div>
            <div className="mt-1">
              <textarea
                {...register("message")}
                rows={4}
                className="py-3 px-4 block w-full shadow-sm text-gray-900 border-gray-300 focus:ring-primarybg focus:border-primarybg border rounded-md"
                aria-describedby="message-max"
                defaultValue={""}
              />
              <p className="text-sm text-red-500 mt-2">
                {errors.service?.message}
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-start">
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-primarybg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primarybg sm:w-auto"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
