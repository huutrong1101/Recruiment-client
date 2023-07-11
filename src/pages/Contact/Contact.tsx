import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl font-semibold">We'd Love to Hear From You</h3>
        <p className="text-lg text-gray-500">
          Whether you're curious about features, a free trial, or even press
          -we're ready to answer any and all questions.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-7">
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.673660673863!2d106.8058137744359!3d10.83626678931615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175272fb77e7199%3A0x98cb51d4483e1172!2sFPT%20Software%20F-Town%203!5e0!3m2!1sen!2s!4v1688998470901!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full p-3 border border-gray-300 rounded-lg">
            <h4 className="text-2xl font-semibold text-center">Get in touch</h4>
            <form className="mt-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col w-1/2 mb-4">
                  <label className="mb-1">Your Name:</label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300 focus:border-emerald-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col w-1/2 mb-4">
                  <label className="mb-1">Your Email:</label>
                  <input
                    type="text"
                    className="p-2 border border-gray-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">Your Question:</label>
                <textarea
                  className="h-20 p-2 border border-gray-300"
                  placeholder="Enter your question"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1">Your Message:</label>
                <textarea
                  className="h-20 p-2 border border-gray-300"
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex justify-center">
                <button className="p-3 text-white rounded-md bg-emerald-700">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
