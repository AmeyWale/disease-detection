import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center p-[20px] pb-[100px] flex-col gap-16">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      <div className="relative z-10 rounded-3xl bg-white p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="primary-color-bg rounded-3xl p-8 pt-12 text-white bg-blue-200 hovered-element">
            <div className="mb-4 uppercase">Contact Us</div>
            <div className="mb-6 text-4xl font-semibold">
              <i className="fas fa-comment-dots" aria-hidden="true"></i> Let's
              talk
            </div>
            <div className="hidden py-4 lg:block">
              <div className="mb-6 flex flex-row space-x-4">
                
                <div className="flex flex-col">
                  <div className="text-2xl font-semibold">Our Location</div>
                  <div id="contact-location" className="">
                    Online
                  </div>
                </div>
              </div>
              <div className="mb-6 flex flex-row space-x-4">
                
                <div className="flex flex-col">
                  <div className="text-2xl font-semibold">Email Address</div>
                  <div id="contact-email" className="">
                    info@Alzheimerprediction.com
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                
                <div className="flex flex-col">
                  <div className="text-2xl font-semibold">Telephone</div>
                  <div id="contact-phone-number" className="">
                    +1-234-567-890
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-6">
            <form id="contact-us-form">
              <div className="flex flex-col space-y-4 md:space-y-12">
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                  <div className="w-full">
                    <div className="">
                      <label
                        for="first-name"
                        className="font-medium text-gray-700"
                      >
                        First Name
                      </label>
                    </div>
                    <div>
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        className="w-full border border-white border-b-gray-300 p-2"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <label
                        for="last-name"
                        className="font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                    </div>
                    <div>
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        className="w-full border border-white border-b-gray-300 p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                  <div className="w-full">
                    <div className="">
                      <label for="email" className="font-medium text-gray-700">
                        Email Address
                      </label>
                    </div>
                    <div>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full border border-white border-b-gray-300 p-2"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="">
                      <label for="phone" className="font-medium text-gray-700">
                        Phone
                      </label>
                    </div>
                    <div>
                      <input
                        id="phone"
                        type="phone"
                        name="phone"
                        className="w-full border border-white border-b-gray-300 p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="">
                    <label for="message" className="font-medium text-gray-700">
                      Message
                    </label>
                  </div>
                  <div className="">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full border border-white border-b-gray-300 p-2"
                    ></textarea>
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="primary-color-bg items-center rounded px-8 py-3 text-sm font-semibold uppercase text-white bg-blue-200 hover:bg-blue-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
