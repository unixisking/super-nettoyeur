import React from "react"
import { Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Faq({ blok }) {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-primarytext sm:text-4xl">
              {blok.title}
            </h2>
            <p className="text-lg text-center text-textprimary">
              {blok.preparagraph}
            </p>
          </div>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {blok.questions.map(questions => (
              <Disclosure as="div" key={questions.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">
                          {questions.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform text-primarybg"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">
                        {questions.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <p className="text-left text-lg py-6 font-bold">
            {blok.postparagraph}
          </p>
        </div>
      </div>
    </div>
  )
}
